"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? header.classList.add("header-scrolled")
      : header.classList.remove("header-scrolled");
      
  });
});
