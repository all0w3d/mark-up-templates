function toTop() {
  let toTop = document.querySelector(".to-top-btn");
  let home = document.querySelector("main");

  if (window.pageYOffset >= 500) {
    toTop.classList.remove("d-none");
  } else {
    toTop.classList.add("d-none");
  }

  toTop.addEventListener("click", function () {
    home.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
