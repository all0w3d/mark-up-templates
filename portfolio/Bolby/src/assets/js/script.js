@@include("_parallax.js");
@@include("_textChange.js");
@@include("_animate.js");
@@include("_scrollToPage.js");
@@include("_checkScroll.js");
@@include("_sticky.js");
@@include("_toTopBtn.js");
@@include("_aos.js");
@@include("_btn.js");
@@include("_filter.js");
@@include("_slider.js");

window.addEventListener("scroll", () => {
  stickyNav();
  checkScroll();
  AOS.init();
  toTop();
});

window.addEventListener("DOMContentLoaded", () => {
  parallaxMain();
  scrollToPage();
  clickBtn();
  textChange();
  filter();
  slider();

  // animations
  function animations() {
    let j = 0;

    document.querySelectorAll(".posts__item").forEach((post) => {
      post.setAttribute("data-aos-delay", `${j}`);
      j += 200;
    });

    document
      .querySelectorAll(".title, .experience__item-p, .posts__item")
      .forEach((i) => {
        i.setAttribute("data-aos", "fade-up");
        i.setAttribute("data-aos-duration", "1000");
        i.setAttribute("data-aos-once", "true");
      });
  }
});
