let contentItem = document.querySelectorAll(".content__item");

let artBtn = document.querySelector("#art");
let brandingBtn = document.querySelector("#branding");
let creativeBtn = document.querySelector("#creative");
let designBtn = document.querySelector("#design");
let everythingBtn = document.querySelector("#everything");
let btns = document.querySelectorAll(".menu__item");
let leadMoreBtn = document.querySelector(".more-btn");
let leadLessBtn = document.querySelector(".less-btn");

everythingBtn.addEventListener("click", function () {
  for (let i of btns) {
    i.classList.remove("active");
  }

  everythingBtn.classList.add("active");

  for (let i of contentItem) {
    if (!i.classList.contains("d-none")) {
      i.style.display = "flex";
      i.classList.add("animate__animated");
      i.classList.add("animate__fadeIn");
    }
  }
});

artBtn.addEventListener("click", function () {
  for (let i of btns) {
    i.classList.remove("active");
  }

  artBtn.classList.add("active");

  for (let i of contentItem) {
    if (i.classList.contains("art") & !i.classList.contains("d-none")) {
      i.classList.add("animate__animated");
      i.classList.add("animate__fadeIn");
      i.style.display = "flex";
    } else {
      if (!i.classList.contains("art") & !i.classList.contains("d-none")) {
        i.style.display = "none";
      }
    }
  }
});

creativeBtn.addEventListener("click", function () {
  for (let i of btns) {
    i.classList.remove("active");
  }

  creativeBtn.classList.add("active");

  for (let i of contentItem) {
    if (i.classList.contains("creative") & !i.classList.contains("d-none")) {
      i.classList.add("animate__animated");
      i.classList.add("animate__fadeIn");
      i.style.display = "flex";
    } else {
      if (!i.classList.contains("creative") & !i.classList.contains("d-none")) {
        i.style.display = "none";
      }
    }
  }
});

brandingBtn.addEventListener("click", function () {
  for (let i of btns) {
    i.classList.remove("active");
  }

  brandingBtn.classList.add("active");

  for (let i of contentItem) {
    if (i.classList.contains("branding") & !i.classList.contains("d-none")) {
      i.classList.add("animate__animated");
      i.classList.add("animate__fadeIn");
      i.style.display = "flex";
    } else {
      if (!i.classList.contains("branding") & !i.classList.contains("d-none")) {
        i.style.display = "none";
      }
    }
  }
});

designBtn.addEventListener("click", function () {
  for (let i of btns) {
    i.classList.remove("active");
  }

  designBtn.classList.add("active");

  for (let i of contentItem) {
    if (i.classList.contains("design") & !i.classList.contains("d-none")) {
      i.classList.add("animate__animated");
      i.classList.add("animate__fadeIn");
      i.style.display = "flex";
    } else {
      if (!i.classList.contains("design") & !i.classList.contains("d-none")) {
        i.style.display = "none";
      }
    }
  }
});

leadMoreBtn.addEventListener("click", function () {
  everythingBtn.click();

  for (let i of contentItem) {
    if (i.classList.contains("hided")) {
      i.classList.remove("d-none");
      i.style.display = "flex";
      leadMoreBtn.style.display = "none";
      leadLessBtn.style.display = "flex";
    }
  }
});

leadLessBtn.addEventListener("click", function () {
  everythingBtn.click();

  for (let i of contentItem) {
    if (i.classList.contains("hided")) {
      i.classList.add("d-none");
      i.style.display = "none";
      leadMoreBtn.style.display = "flex";
      leadLessBtn.style.display = "none";
    }
  }
});
