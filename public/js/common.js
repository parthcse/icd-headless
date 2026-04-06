// Start header sticky 
const header = document.querySelector(".header-main");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 5) {
      header.classList.add("bg-black-light", "shadow-lg");
    } else {
      header.classList.remove("bg-black-light", "shadow-lg");
    }
  });
// End header sticky 
// Start mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});
// End mobile menu

// Start home-services tabs
document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".home-services .tab-btn");
  const contents = document.querySelectorAll(".home-services .tab-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // remove active
      buttons.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // add active
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");

    });
  });

});
// End home-services tabs

// Start home-our-client-slider
$(document).ready(function(){
  $(".home-our-client-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoWidth:true,
     navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor">
        <path d="M9.27999 16.3199C9.62666 16.6666 9.62666 16.9866 9.27999 17.2799C8.93332 17.6266 8.61332 17.6266 8.31999 17.2799L0.47999 9.39992C0.15999 9.07992 0.15999 8.74659 0.47999 8.39992L8.31999 0.519921C8.61332 0.173254 8.93332 0.173254 9.27999 0.519921C9.62666 0.813255 9.62666 1.13325 9.27999 1.47992L2.11999 8.91992L9.27999 16.3199Z"/>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor">
        <path d="M0.52001 16.3199L7.68001 8.91992L0.52001 1.47992C0.173343 1.13325 0.173343 0.813255 0.52001 0.519921C0.866676 0.173254 1.18668 0.173254 1.48001 0.519921L9.32001 8.39992C9.64001 8.74659 9.64001 9.07992 9.32001 9.39992L1.48001 17.2799C1.18668 17.6266 0.866676 17.6266 0.52001 17.2799C0.173343 16.9866 0.173343 16.6666 0.52001 16.3199Z"/>
      </svg>`
    ],
  });
});
// Start home-our-client-slider

// Start common counter
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".common-counter");
  const counters = document.querySelectorAll(".counter");
  let started = false;
  const startCounter = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      const prefix = counter.getAttribute("data-prefix") || "";
      let count = 0;
      const increment = target / 100;
      const update = () => {
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        startCounter();
      }
    });
  }, {
    threshold: 0.2   // 40% section दिखे तब start
  });
  observer.observe(section);
});
// End common counter

// Start Animation  
const elements = document.querySelectorAll('.wpb_animate');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('wpb_start');

        // 🔥 Ek baar animation ke baad stop (important)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3 // 30% element visible hone par trigger
  });

  elements.forEach(el => observer.observe(el));
// End Animation 

document.querySelectorAll('.char-animate').forEach(el => {
  const text = el.textContent;
  el.innerHTML = text
    .split('')
    .map((char, i) => `<span class="animated wpb_animate wpb_fadeUp wpb_start" style="animation-duration: 0.7s; animation-delay:${0.5 + i * 0.005}s">${char}</span>`)
    .join('');
});