

function scrollToPage() {
  
    let home = document.querySelector("main");
    let whatAbout = document.querySelector(".picture__slider");
    let whatWeDo = document.querySelector(".What-we-do");
    let ourProject = document.querySelector(".projects");
    let team = document.querySelector(".team");
    let contact = document.querySelector(".team__footer");
    let navItem = document.getElementsByClassName("nav__item");

  navItem[0].onclick = function () {
    home.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  navItem[1].onclick = function () {
    whatAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[2].onclick = function () {
    whatWeDo.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[3].onclick = function () {
    ourProject.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[4].onclick = function () {
    team.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[5].onclick = function () {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  navItem[6].onclick = function () {
    home.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  navItem[7].onclick = function () {
    whatAbout.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[8].onclick = function () {
    whatWeDo.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[9].onclick = function () {
    ourProject.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[10].onclick = function () {
    team.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[11].onclick = function () {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}

scrollToPage();
