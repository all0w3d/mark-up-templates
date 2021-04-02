function filter() {
  let contentItem = document.querySelectorAll(".content__item"),
    btns = document.querySelectorAll(".menu__item"),
    leadMoreBtn = document.querySelector(".more-btn"),
    leadLessBtn = document.querySelector(".less-btn"),
    currentTab = "content__item",
    tabs = "less";

  function showMore() {
    newTab();
    contentItem = document.querySelectorAll(".content__item");
    tabs = "more";
    contentItem.forEach((i) => {
      if (
        i.classList.contains(`${currentTab}`) &&
        !i.classList.contains("hided")
      ) {
        i.classList.remove("d-none");
      } else {
        i.classList.add("d-none");
      }

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
    document.querySelectorAll(".hided").forEach((i) => {
      i.remove();
    });
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

  leadMoreBtn.addEventListener("click", () => {
    showMore();
  });
  leadLessBtn.addEventListener("click", showLess);
}
("use strict");
class Tabs {
  constructor(name, cat, bg, parentSelector) {
    this.name = name;
    this.cat = cat;
    this.bg = bg;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("content__item", `${this.cat}`, "hided");
    element.innerHTML = `
    
        <div class="content__item-img">
            <img src=${this.bg} alt="">
        </div>
        <p>${this.name}</p>
        <div class="content__hover">
            <div class="content__hover-tag">${this.cat}</div>
            <div class="content__hover-icon">
            @@include('../imgs/zoom.svg')
            </div>
        </div>
    
  `;
    this.parent.append(element);
  }
}

function newTab() {
  new Tabs(
    "Project Managment Illustration",
    "creative",
    "assets/imgs/recent/1.png",
    ".recent__content"
  ).render();
  new Tabs(
    "Project Managment Illustration",
    "art",
    "assets/imgs/recent/5.png",
    ".recent__content"
  ).render();
  new Tabs(
    "Project Managment Illustration",
    "branding",
    "assets/imgs/recent/6.png",
    ".recent__content"
  ).render();
}
