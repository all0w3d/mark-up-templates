@@include("_checkScroll.js");
@@include("_sticky.js");
@@include("_scrollToPage.js");

let burgerBtn = document.querySelector("#burgerBtn");
let nav = document.querySelector("#nav");
let close = document.querySelector("#close");
let body = document.querySelector("#body");

let navItem = document.getElementsByClassName("nav__item");
let footer = document.querySelector("#end");

burgerBtn.addEventListener("click", function () {
  nav.classList.toggle("active__nav");
  if (nav.classList.contains("active__nav")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
});

close.addEventListener("click", function () {
  nav.classList.remove("active__nav");
  body.style.overflow = "scroll";
});

for (let i of navItem) {
  i.addEventListener("click", function () {
    nav.classList.remove("active__nav");
    body.style.overflow = "scroll";
  });
}

