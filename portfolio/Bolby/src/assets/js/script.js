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

window.onscroll = function () {
  stickyNav();
  ToTop();
  checkScroll();
  AOS.init();
};


// animations
for (let i of document.querySelectorAll(".title")) {
  i.setAttribute("data-aos", "fade-up");
  i.setAttribute("data-aos-duration", "1000");
  i.setAttribute("data-aos-once", "true");
}

for (let i of document.querySelectorAll(".experience__item-p")) {
  i.setAttribute("data-aos", "fade-up");
  i.setAttribute("data-aos-duration", "1000");
  i.setAttribute("data-aos-once", "true");
}


for (let i of document.querySelectorAll(".posts__item")) {
  i.setAttribute("data-aos", "fade-up");
  i.setAttribute("data-aos-duration", "1000");
  i.setAttribute("data-aos-once", "true");
}

let posts = document.querySelectorAll(".posts__item") 
  posts[0].setAttribute("data-aos-delay", "100");
  posts[1].setAttribute("data-aos-delay", "300");
  posts[2].setAttribute("data-aos-delay", "600");
