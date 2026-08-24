/* ==========================================================================
   Virexo Digital Business Website — Script
   Handles: sticky header state, mobile menu, smooth scroll + active link,
   footer year, contact form validation.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Theme toggle (dark / light) ----------
     Initial theme is already applied by the inline <script> in <head>
     (before first paint). This just wires up the toggle buttons and
     keeps them in sync with the current state. */
  var THEME_KEY = "virexo-theme";
  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var themeToggleMobile = document.getElementById("themeToggleMobile");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncToggleButtons() {
    var isDark = currentTheme() === "dark";
    [themeToggle, themeToggleMobile].forEach(function (btn) {
      if (!btn) return;
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    });
    var mobileLabel = themeToggleMobile ? themeToggleMobile.querySelector(".theme-toggle-label") : null;
    if (mobileLabel) {
      mobileLabel.textContent = isDark ? "Light theme" : "Dark theme";
    }
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* localStorage unavailable (e.g. private browsing) — theme still
         applies for this session, it just won't persist. */
    }
    syncToggleButtons();
  }

  function toggleTheme() {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
  }

  [themeToggle, themeToggleMobile].forEach(function (btn) {
    if (btn) btn.addEventListener("click", toggleTheme);
  });

  syncToggleButtons();

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.getElementById("siteHeader");

  function updateHeaderState() {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* ---------- Swap header to a dark-friendly style over dark sections ----------
     The header is a frosted, translucent panel. That looks great over the
     light sections, but ghosts unreadably over the dark Contact/Footer
     background. Toggle a class once the dark section reaches the header. */
  var contactSection = document.getElementById("contact");
  if (contactSection && "IntersectionObserver" in window) {
    var headerHeight = header ? header.offsetHeight : 0;
    var darkObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle("on-dark", entry.isIntersecting);
        });
      },
      { rootMargin: -headerHeight + "px 0px 0px 0px", threshold: 0 }
    );
    darkObserver.observe(contactSection);
  }

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var mobileMenu = document.getElementById("mobileMenu");

  function closeMobileMenu() {
    menuToggle.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  function toggleMobileMenu() {
    var isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", toggleMobileMenu);
  }

  /* ---------- Smooth scroll for in-page links + close mobile menu ---------- */
  var navAnchors = document.querySelectorAll('a[data-nav], a.nav-link');

  navAnchors.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;

      var target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      // Close the mobile menu first so its extra height doesn't inflate
      // header.offsetHeight and throw off the scroll target below.
      closeMobileMenu();

      var offset = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset + 1;

      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ---------- Active nav link on scroll (scrollspy) ---------- */
  var sections = ["top", "about", "services", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var isMatch = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active-link", isMatch);
    });
  }

  function updateScrollSpy() {
    var scrollPos = window.scrollY + (header ? header.offsetHeight : 0) + 40;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section;
      }
    });

    setActiveLink(current.id);
  }

  window.addEventListener("scroll", updateScrollSpy, { passive: true });
  updateScrollSpy();

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    function updateBackToTop() {
      backToTop.classList.toggle("is-visible", window.scrollY > 600);
    }
    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");

  function showError(fieldId, message) {
    var row = document.getElementById(fieldId).closest(".form-row");
    var errorEl = document.getElementById(fieldId + "Error");
    row.classList.toggle("has-error", Boolean(message));
    errorEl.textContent = message || "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Honeypot check: a real visitor never fills this hidden field, so if
      // it has a value the submission is almost certainly a bot. Drop it
      // quietly with a fake success message rather than tipping off the bot.
      var honeypot = document.getElementById("company");
      if (honeypot && honeypot.value.trim() !== "") {
        formStatus.textContent = "Thanks — your message has been received.";
        form.reset();
        return;
      }

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();

      var isValid = true;

      if (name.length < 2) {
        showError("name", "Please enter your full name.");
        isValid = false;
      } else {
        showError("name", "");
      }

      if (!isValidEmail(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
      } else {
        showError("email", "");
      }

      if (message.length < 10) {
        showError("message", "Tell us a little more (10+ characters).");
        isValid = false;
      } else {
        showError("message", "");
      }

      if (!isValid) {
        formStatus.textContent = "";
        return;
      }

      // No backend is wired up for this internship project — simulate a
      // successful submission so the interaction is fully demonstrable.
      formStatus.textContent =
        "Thanks, " + name.split(" ")[0] + " — your message has been received. We'll reply within one business day.";
      form.reset();
    });
  }
})();
