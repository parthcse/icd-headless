(function () {
  // Loads the site's design script. jQuery + Owl Carousel used to be pulled in
  // here first — they existed ONLY for the three sliders, which are now the
  // dependency-free components/common/Carousel.js, so ~42 KiB of vendor JS no
  // longer downloads on any page. Nothing else in common-next.js uses jQuery.
  var s = document.createElement("script");
  s.src = "/js/common-next.js";
  s.async = false;
  document.body.appendChild(s);
})();
