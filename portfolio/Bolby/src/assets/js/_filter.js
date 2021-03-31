function filter() {
  let contentItem = document.querySelectorAll(".content__item"),
    btns = document.querySelectorAll(".menu__item"),
    leadMoreBtn = document.querySelector(".more-btn"),
    leadLessBtn = document.querySelector(".less-btn"),
    currentTab = "content__item",
    tabs = "less";

  function showMore() {
    tabs = "more";
    contentItem.forEach((i) => {
      if (
        i.classList.contains("hided", "d-none") &&
        i.classList.contains(`${currentTab}`)
      ) {
        i.classList.remove("d-none");
      }
    });
    leadMoreBtn.classList.add("d-none");
    leadLessBtn.classList.remove("d-none");
  }

  function showLess() {
    tabs = "less";
    contentItem.forEach((i) => {
      if (i.classList.contains("hided")) {
        i.classList.add("d-none");
      }
    });
    leadMoreBtn.classList.remove("d-none");
    leadLessBtn.classList.add("d-none");
  }

  function catSwitch(cat) {
    btns.forEach((i) => {
      if (cat == i) {
        i.classList.add("active");
      } else {
        i.classList.remove("active");
      }
    });

    contentItem.forEach((i) => {
      if (tabs == "less") {
        if (
          i.classList.contains(`${cat.id}`) &&
          !i.classList.contains("hided")
        ) {
          i.classList.remove("d-none");
          currentTab = cat.id;
        } else {
          i.classList.add("d-none");
        }
      } else {
        if (i.classList.contains(`${cat.id}`)) {
          i.classList.remove("d-none");
          currentTab = cat.id;
        } else {
          i.classList.add("d-none");
        }
      }
    });
  }

  btns.forEach((i) => {
    i.addEventListener("click", () => {
      catSwitch(i);
    });
  });

  leadMoreBtn.addEventListener("click", showMore);
  leadLessBtn.addEventListener("click", showLess);
}
