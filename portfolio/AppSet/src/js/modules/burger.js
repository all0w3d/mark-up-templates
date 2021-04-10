document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger"),
    nav = document.querySelector(".header-menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");

    burger.classList.toggle("change");
  });
});
