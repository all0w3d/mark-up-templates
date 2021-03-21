@@include("_parallax.js");
@@include("_textChange.js");
@@include("_animate.js");
@@include("_slickSlider.js");
@@include("_scrollToPage.js");
@@include("_checkScroll.js");
@@include("_sticky.js");
@@include("_toTopBtn.js");
@@include("_aos.js");
@@include("_btn.js");
@@include("_filter.js");

window.addEventListener("scroll", () => {
  stickyNav();
  ToTop();
  checkScroll();
  AOS.init();
});

// animations

window.addEventListener("DOMContentLoaded", () => {
  let j = 0;

  document.querySelectorAll(".posts__item").forEach((post) => {
    post.setAttribute("data-aos-delay", `${j}`);
    j += 200;
  });

  document.querySelectorAll(".title, .experience__item-p, .posts__item").forEach((i) => {
      i.setAttribute("data-aos", "fade-up");
      i.setAttribute("data-aos-duration", "1000");
      i.setAttribute("data-aos-once", "true");
    });
});




