"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header"),
    burger = document.querySelectorAll(".burger div"),
    nav = document.querySelector(".header-menu"),
    navItems = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
      nav.style.backgroundColor = "#1f1f1f";
      burger.forEach((i) => {
        i.style.backgroundColor = "white";
      });
      navItems.forEach((i) => {
        i.style.color = "white";
      });
    } else {
      header.classList.remove("header-scrolled");
      burger.forEach((i) => {
        i.style.backgroundColor = "black";
      });
      nav.style.backgroundColor = "white";
      navItems.forEach((i) => {
        i.style.color = "black";
      });
    }
  });
});
