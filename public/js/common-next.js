function icdDomReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}

window.icdInitPage = function () {
  // Clean up persistent listeners from the previous page
  if (window._icdCleanup) {
    window._icdCleanup.forEach(function (fn) { fn(); });
  }
  window._icdCleanup = [];

  // Header sticky glass state on scroll
  var header = document.querySelector(".header-main");
  if (header) {
    function onScroll() {
      if (window.scrollY > 5) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window._icdCleanup.push(function () {
      window.removeEventListener("scroll", onScroll);
    });
    onScroll();
  }

  // Mobile menu: left drawer, backdrop, hamburger → close
  var btn = document.getElementById("menuBtn");
  var backdrop = document.getElementById("mobileMenuBackdrop");
  var panel = document.getElementById("mobileMenuPanel");
  if (btn && backdrop && panel) {
    function isMenuOpen() {
      return panel.classList.contains("translate-x-0");
    }

    function applyMobileMenuOpen(open) {
      if (open) {
        backdrop.classList.remove("opacity-0", "invisible", "pointer-events-none");
        backdrop.classList.add("opacity-100", "visible", "pointer-events-auto");
        backdrop.setAttribute("aria-hidden", "false");

        panel.classList.remove("-translate-x-full");
        panel.classList.add("translate-x-0");
        panel.setAttribute("aria-hidden", "false");

        btn.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("aria-label", "Close menu");

        document.body.classList.add("overflow-hidden");
      } else {
        backdrop.classList.add("opacity-0", "invisible", "pointer-events-none");
        backdrop.classList.remove("opacity-100", "visible", "pointer-events-auto");
        backdrop.setAttribute("aria-hidden", "true");

        panel.classList.add("-translate-x-full");
        panel.classList.remove("translate-x-0");
        panel.setAttribute("aria-hidden", "true");

        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");

        document.body.classList.remove("overflow-hidden");
      }
    }

    function onBtnClick() { applyMobileMenuOpen(!isMenuOpen()); }
    function onBackdropClick() { applyMobileMenuOpen(false); }
    function onKeydown(e) { if (e.key === "Escape" && isMenuOpen()) applyMobileMenuOpen(false); }

    var mq = window.matchMedia("(min-width: 1024px)");
    function onBreakpoint() { if (mq.matches && isMenuOpen()) applyMobileMenuOpen(false); }

    btn.addEventListener("click", onBtnClick);
    backdrop.addEventListener("click", onBackdropClick);
    document.addEventListener("keydown", onKeydown);
    mq.addEventListener("change", onBreakpoint);

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { applyMobileMenuOpen(false); });
    });

    window._icdCleanup.push(function () {
      btn.removeEventListener("click", onBtnClick);
      backdrop.removeEventListener("click", onBackdropClick);
      document.removeEventListener("keydown", onKeydown);
      mq.removeEventListener("change", onBreakpoint);
    });
  }

  // Home services tabs
  var tabButtons = document.querySelectorAll(".home-services .tab-btn");
  var tabContents = document.querySelectorAll(".home-services .tab-content");
  tabButtons.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function () {
      tabButtons.forEach(function (b) { b.classList.remove("active"); });
      tabContents.forEach(function (c) { c.classList.remove("active"); });
      tabBtn.classList.add("active");
      var id = tabBtn.getAttribute("data-tab");
      var tabPanel = id ? document.getElementById(id) : null;
      if (tabPanel) tabPanel.classList.add("active");
    });
  });

  // Owl carousels (jQuery)
  icdInitOwl();

  // Counters
  var counterSection = document.querySelector(".common-counter");
  var counters = document.querySelectorAll(".counter");
  if (counterSection && counters.length) {
    var started = false;
    var startCounter = function () {
      counters.forEach(function (counter) {
        var target = +counter.getAttribute("data-target");
        var suffix = counter.getAttribute("data-suffix") || "";
        var prefix = counter.getAttribute("data-prefix") || "";
        var count = 0;
        var increment = target / 100;
        var update = function () {
          if (count < target) {
            count += increment;
            counter.innerText = prefix + Math.ceil(count) + suffix;
            requestAnimationFrame(update);
          } else {
            counter.innerText = prefix + target + suffix;
          }
        };
        update();
      });
    };
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            started = true;
            startCounter();
          }
        });
      },
      { threshold: 0.3 }
    );
    counterObserver.observe(counterSection);
  }

  // Scroll-in animations
  var wpbElements = document.querySelectorAll(
    ".wpb_animate, .animate.fadeUp, .animate.fadeDown, .animate.zoomIn, .animate.zoomOut, .animate.line"
  );
  if (wpbElements.length) {
    var animObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("wpb_start");
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    wpbElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("wpb_start");
      } else {
        animObserver.observe(el);
      }
    });
  }

  // charsAnimIn headings
  var headings = document.querySelectorAll(".wpb_animate_when_almost_visible.charsAnimIn");
  if (headings.length) {
    var charObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated", "wpb_start_animation");
            charObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    headings.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("animated", "wpb_start_animation");
      } else {
        charObserver.observe(el);
      }
    });
  }
};

function icdInitOwl() {
  if (typeof window.jQuery === "undefined") return;
  var $ = window.jQuery;
  var navSvg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor"><path d="M9.27999 16.3199C9.62666 16.6666 9.62666 16.9866 9.27999 17.2799C8.93332 17.6266 8.61332 17.6266 8.31999 17.2799L0.47999 9.39992C0.15999 9.07992 0.15999 8.74659 0.47999 8.39992L8.31999 0.519921C8.61332 0.173254 8.93332 0.173254 9.27999 0.519921C9.62666 0.813255 9.62666 1.13325 9.27999 1.47992L2.11999 8.91992L9.27999 16.3199Z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor"><path d="M0.52001 16.3199L7.68001 8.91992L0.52001 1.47992C0.173343 1.13325 0.173343 0.813255 0.52001 0.519921C0.866676 0.173254 1.18668 0.173254 1.48001 0.519921L9.32001 8.39992C9.64001 8.74659 9.64001 9.07992 9.32001 9.39992L1.48001 17.2799C1.18668 17.6266 0.866676 17.6266 0.52001 17.2799C0.173343 16.9866 0.173343 16.6666 0.52001 16.3199Z"/></svg>',
  ];
  $(".home-our-client-slider").each(function () {
    var $el = $(this);
    if ($el.data("owl.carousel")) $el.trigger("destroy.owl.carousel");
  });
  $(".home-our-client-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoWidth: true,
    navText: navSvg,
  });
  $(".about-our-culture-slider").each(function () {
    var $el = $(this);
    if ($el.data("owl.carousel")) $el.trigger("destroy.owl.carousel");
  });
  $(".about-our-culture-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: navSvg,
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      1024: { items: 5 },
    },
  });
}

icdDomReady(function () {
  window.icdInitPage();
});
