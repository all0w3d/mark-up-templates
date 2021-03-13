function checkScroll() {
  let scrollPos = window.scrollY + 400;

  let home = document.querySelector("main");
  let about = document.querySelector(".about");
  let services = document.querySelector(".services");
  let exp = document.querySelector(".experience");
  let recent = document.querySelector(".recent");
  let posts = document.querySelector(".posts");
  let contact = document.querySelector(".contact");
  let navItem = document.getElementsByClassName("nav__item");

  let nav2 = about.offsetTop;
  let nav3 = services.offsetTop;
  let nav4 = exp.offsetTop;
  let nav5 = recent.offsetTop;
  let nav6 = posts.offsetTop;
  let nav7 = contact.offsetTop;

  if (scrollPos < nav2) {
    navItem[0].classList.add("active");
  } else {
    navItem[0].classList.remove("active");
  }

  if (scrollPos < nav3 && scrollPos > nav2) {
    navItem[1].classList.add("active");
    let loading = document.querySelector("#loading");
    loading.classList.add("loading-animation");
    let numberAnimation = document.querySelectorAll(".footer__item");
    for (let h of numberAnimation) {
      h.classList.add("number-animation");
    }
  } else {
    navItem[1].classList.remove("active");
  }

  if (scrollPos < nav4 && scrollPos > nav3) {
    navItem[2].classList.add("active");
  } else {
    navItem[2].classList.remove("active");
  }

  if (scrollPos < nav5 && scrollPos > nav4) {
    navItem[3].classList.add("active");
  } else {
    navItem[3].classList.remove("active");
  }

  if (scrollPos < nav6 && scrollPos > nav5) {
    navItem[4].classList.add("active");
  } else {
    navItem[4].classList.remove("active");
  }

  if (scrollPos < nav7 && scrollPos > nav6) {
    navItem[5].classList.add("active");
  } else {
    navItem[5].classList.remove("active");
  }

  if (scrollPos > nav7) {
    navItem[6].classList.add("active");
  } else {
    navItem[6].classList.remove("active");
  }
}
