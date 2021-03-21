window.addEventListener("DOMContentLoaded", () => {
  let selectorArr = [
    "main",
    ".about",
    ".services",
    ".experience",
    ".recent",
    ".posts",
    ".contact",
  ];

  document.querySelectorAll(".nav__item").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      if (event.target == item) {
        document.querySelector(`${selectorArr[i]}`).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  document.querySelector(".main__scroll").addEventListener("click", function () {
        document.querySelector('.about').scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

});
