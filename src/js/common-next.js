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

  // Mobile menu: multi-level sliding panels
  var menuBtn = document.getElementById("menuBtn");
  var mobOverlay = document.getElementById("mob-overlay");
  var mobDrawer = document.getElementById("mob-drawer");
  var drawerCloseBtn = document.getElementById("drawerClose");

  function openMobDrawer() {
    if (mobOverlay) mobOverlay.classList.add("active");
    if (mobDrawer) mobDrawer.classList.add("open");
    var iconOpen = document.getElementById("iconOpen");
    var iconClose = document.getElementById("iconClose");
    if (iconOpen) iconOpen.classList.add("hidden");
    if (iconClose) iconClose.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeMobDrawer() {
    if (mobOverlay) mobOverlay.classList.remove("active");
    if (mobDrawer) mobDrawer.classList.remove("open");
    var iconOpen = document.getElementById("iconOpen");
    var iconClose = document.getElementById("iconClose");
    if (iconOpen) iconOpen.classList.remove("hidden");
    if (iconClose) iconClose.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    document.querySelectorAll(".mob-panel.level-2").forEach(function (p) { p.classList.remove("active"); });
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", openMobDrawer);
    window._icdCleanup.push(function () { menuBtn.removeEventListener("click", openMobDrawer); });
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeMobDrawer);
    window._icdCleanup.push(function () { drawerCloseBtn.removeEventListener("click", closeMobDrawer); });
  }
  if (mobOverlay) {
    mobOverlay.addEventListener("click", closeMobDrawer);
    window._icdCleanup.push(function () { mobOverlay.removeEventListener("click", closeMobDrawer); });
  }

  // Open sub-panels
  document.querySelectorAll(".open-sub").forEach(function (subBtn) {
    subBtn.addEventListener("click", function () {
      var targetId = subBtn.getAttribute("data-panel");
      if (targetId) {
        var target = document.getElementById(targetId);
        if (target) target.classList.add("active");
      }
    });
  });

  // Back buttons
  document.querySelectorAll(".back-btn").forEach(function (backBtn) {
    backBtn.addEventListener("click", function () {
      var p = backBtn.closest(".mob-panel.level-2");
      if (p) p.classList.remove("active");
    });
  });

  // Close drawer when an anchor link inside is clicked
  if (mobDrawer) {
    mobDrawer.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", closeMobDrawer);
    });
  }

  // ESC closes drawer
  function onMobEsc(e) { if (e.key === "Escape") closeMobDrawer(); }
  document.addEventListener("keydown", onMobEsc);
  window._icdCleanup.push(function () { document.removeEventListener("keydown", onMobEsc); });

  // Close drawer at lg breakpoint
  var mobMq = window.matchMedia("(min-width: 1024px)");
  function onMobBreakpoint() { if (mobMq.matches) closeMobDrawer(); }
  mobMq.addEventListener("change", onMobBreakpoint);
  window._icdCleanup.push(function () { mobMq.removeEventListener("change", onMobBreakpoint); });

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
            entry.target.classList.add("start");
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    wpbElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("start");
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

icdDomReady(function () {
  window.icdInitPage();
});
