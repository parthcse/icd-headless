(function () {
  function loadScript(src, onload) {
    var s = document.createElement("script");
    s.src = src;
    s.async = false;
    if (onload) s.onload = onload;
    document.body.appendChild(s);
  }
  if (typeof window.jQuery !== "undefined") {
    loadScript("/js/owl.carousel.min.js", function () {
      loadScript("/js/common-next.js");
    });
    return;
  }
  loadScript("/js/jquery.min.js", function () {
    loadScript("/js/owl.carousel.min.js", function () {
      loadScript("/js/common-next.js");
    });
  });
})();
