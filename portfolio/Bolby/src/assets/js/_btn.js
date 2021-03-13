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