@@include("_parallax.js");
@@include("_textChange.js");
@@include("_animate.js");
@@include("_slickSlider.js");
@@include("_scrollToPage.js");
@@include("_checkScroll.js");
@@include("_sticky.js");
@@include("_toTopBtn.js");

window.onscroll = function () {
  stickyNav();
  ToTop();
  checkScroll();
};

let burgerBtn = document.querySelector('#burgerBtn');
let nav = document.querySelector('.header__nav');
let close = document.querySelector('.closeBtn');
let navItem = document.querySelectorAll('.nav__item');
let body = document.querySelector('body');

burgerBtn.addEventListener("click", function () {
  nav.classList.toggle("mobile");
  
  if (nav.classList.contains("mobile")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
});

close.addEventListener("click", function () {
  nav.classList.remove("mobile");
  body.style.overflow = "visible";
});

for (let i of navItem) {
  i.addEventListener("click", function () {
    if (nav.classList.contains("mobile")) {
    nav.classList.remove("mobile");
    body.style.overflow = "visible";
    }
  });
}