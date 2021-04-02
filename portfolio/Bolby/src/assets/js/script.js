'use strict';

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
// @@include("_server.js");

window.addEventListener("DOMContentLoaded", () => {
  parallaxMain();
  scrollToPage();
  clickBtn();
  textChange();
  filter();
  slider();
  animations();

  window.addEventListener("scroll", () => {
    AOS.init();
    stickyNav();
    checkScroll();
    toTop();
  });
});
