function stickyNav() {
  let header = document.querySelector(".header__content");
  if (window.pageYOffset >= 100) {
    header.classList.add("fixed__navbar");
  } else {
    header.classList.remove("fixed__navbar");
  }
}


