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

window.onscroll = function () {
  stickyNav();
  ToTop();
  checkScroll();
  AOS.init();
};

for (let j of document.querySelectorAll(".title")) {
  j.setAttribute("data-aos", "fade-up");
  j.setAttribute("data-aos-duration", "1000");
  j.setAttribute("data-aos-once", "true");
}


for (let k of document.querySelectorAll(".experience__item-p")) {
  k.setAttribute("data-aos", "fade-up");
  k.setAttribute("data-aos-duration", "1000");
  k.setAttribute("data-aos-once", "true");
}
