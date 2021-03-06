window.addEventListener("scroll", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY + 400;

  let home = document.querySelector("main");
  let whatAbout = document.querySelector(".what-about");
  let whatWeDo = document.querySelector(".What-we-do");
  let ourProject = document.querySelector(".projects");
  let team = document.querySelector(".team");
  let contact = document.querySelector(".team__footer");

  let nav1 = home.offsetTop;
  let nav2 = whatAbout.offsetTop;
  let nav3 = whatWeDo.offsetTop;
  let nav4 = ourProject.offsetTop;
  let nav5 = team.offsetTop;
  let nav6 = contact.offsetTop;

  if (scrollPos < nav2) {
    navItem[0].classList.add("active");
    navItem[6].classList.add("active");
  } else {
    navItem[0].classList.remove("active");
    navItem[6].classList.remove("active");
  }

  if (scrollPos < nav3 && scrollPos > nav2) {
    navItem[1].classList.add("active");
    navItem[7].classList.add("active");
  } else {
    navItem[1].classList.remove("active");
    navItem[7].classList.remove("active");
  }

  if (scrollPos < nav4 && scrollPos > nav3) {
    navItem[2].classList.add("active");
    navItem[8].classList.add("active");
  } else {
    navItem[2].classList.remove("active");
    navItem[8].classList.remove("active");
  }

  if (scrollPos < nav5 && scrollPos > nav4) {
    navItem[3].classList.add("active");
    navItem[9].classList.add("active");
  } else {
    navItem[3].classList.remove("active");
    navItem[9].classList.remove("active");
  }

  if (scrollPos < nav6 && scrollPos > nav5) {
    navItem[4].classList.add("active");
    navItem[10].classList.add("active");
  } else {
    navItem[4].classList.remove("active");
    navItem[10].classList.remove("active");
  }

  if (scrollPos > nav6) {
    navItem[5].classList.add("active");
    navItem[11].classList.add("active");
  } else {
    navItem[5].classList.remove("active");
    navItem[11].classList.remove("active");
  }
}


