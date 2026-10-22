/* JAIR SBA — comportamiento del portafolio
 * 1. Enlaces configurables (js/config.js)
 * 2. Menú móvil accesible
 * 3. Cabecera al hacer scroll + enlace activo
 * 4. Animaciones de aparición (respetan "reducir movimiento")
 * 5. Visor de capturas de los proyectos
 * 6. Año automático en el pie
 */
(function () {
    "use strict";

    var config = window.PORTFOLIO_CONFIG || {};
    var root = document.documentElement;
    root.classList.add("js");

    /* ---------- 1. Enlaces configurables ---------- */
    function lookup(path) {
        return path.split(".").reduce(function (obj, key) {
            return obj && obj[key] !== undefined ? obj[key] : "";
        }, config);
    }

    document.querySelectorAll("[data-link]").forEach(function (el) {
        var key = el.getAttribute("data-link");
        var value = String(lookup(key) || "").trim();

        if (!value) {
            // Sin dato: el elemento queda oculto (y fuera del orden de tabulación).
            el.hidden = true;
            var li = el.closest("li");
            if (li && li.children.length === 1) li.hidden = true;
            return;
        }

        if (key === "email") {
            value = "mailto:" + value;
        } else if (/^www\./i.test(value) || /^[a-z0-9-]+\.[a-z]{2,}\//i.test(value)) {
            // Enlace externo escrito sin https:// (p. ej. "www.linkedin.com/...")
            value = "https://" + value;
        }
        el.setAttribute("href", value);
        el.hidden = false;
        var parentLi = el.closest("li");
        if (parentLi) parentLi.hidden = false;
    });

    document.querySelectorAll("[data-text]").forEach(function (el) {
        el.textContent = lookup(el.getAttribute("data-text"));
    });

    /* ---------- 2. Menú móvil ---------- */
    var toggle = document.getElementById("menu-toggle");
    var navlist = document.getElementById("navlist");
    var header = document.getElementById("header");

    function setMenu(open) {
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
        toggle.querySelector("i").className = open ? "ri-close-line" : "ri-menu-line";
        navlist.classList.toggle("open", open);
        document.body.classList.toggle("menu-open", open);
    }

    if (toggle && navlist) {
        toggle.addEventListener("click", function () {
            setMenu(toggle.getAttribute("aria-expanded") !== "true");
        });

        navlist.addEventListener("click", function (e) {
            if (e.target.closest("a")) setMenu(false);
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && navlist.classList.contains("open")) {
                setMenu(false);
                toggle.focus();
            }
        });

        document.addEventListener("click", function (e) {
            if (navlist.classList.contains("open") && !header.contains(e.target)) setMenu(false);
        });

        window.matchMedia("(min-width: 921px)").addEventListener("change", function (mq) {
            if (mq.matches) setMenu(false);
        });
    }

    /* ---------- 3. Cabecera y enlace activo ---------- */
    function onScroll() {
        header.classList.toggle("scrolled", window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var navLinks = Array.prototype.slice.call(navlist.querySelectorAll('a[href^="#"]'));
    var sections = navLinks
        .map(function (a) { return document.querySelector(a.getAttribute("href")); })
        .filter(Boolean);

    if ("IntersectionObserver" in window) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var id = "#" + entry.target.id;
                navLinks.forEach(function (a) {
                    var active = a.getAttribute("href") === id;
                    a.classList.toggle("active", active);
                    if (active) a.setAttribute("aria-current", "true");
                    else a.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        sections.forEach(function (s) { spy.observe(s); });
    }

    /* ---------- 4. Animaciones de aparición ---------- */
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var revealEls = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealEls.forEach(function (el) { el.classList.add("visible"); });
    } else {
        var revealer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        revealEls.forEach(function (el) { revealer.observe(el); });
    }

    /* ---------- 5. Visor de capturas ---------- */
    var dialog = document.getElementById("gallery");
    var track = document.getElementById("gallery-track");
    var galleries = config.galleries || {};
    var lastTrigger = null;

    if (dialog && typeof dialog.showModal === "function") {
        document.querySelectorAll("[data-gallery]").forEach(function (btn) {
            var data = galleries[btn.getAttribute("data-gallery")];
            if (!data || !data.shots || !data.shots.length) return;
            btn.hidden = false;
            btn.addEventListener("click", function () {
                lastTrigger = btn;
                dialog.querySelector("#gallery-title").textContent = data.title || "Capturas";
                track.innerHTML = "";
                data.shots.forEach(function (shot) {
                    var li = document.createElement("li");
                    var img = document.createElement("img");
                    img.src = shot.src;
                    img.alt = shot.alt || "";
                    img.loading = "lazy";
                    li.appendChild(img);
                    track.appendChild(li);
                });
                dialog.showModal();
                track.scrollLeft = 0;
                document.body.classList.add("gallery-open");
            });
        });

        dialog.querySelector(".gallery-close").addEventListener("click", function () { dialog.close(); });
        dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
        dialog.addEventListener("close", function () {
            document.body.classList.remove("gallery-open");
            if (lastTrigger) lastTrigger.focus();
        });
    }

    /* ---------- 6. Año automático ---------- */
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
