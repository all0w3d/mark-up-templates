const group_1 = document.querySelectorAll(".bg__group-1");
const group_2 = document.querySelectorAll(".bg__group-2");
const group_3 = document.querySelectorAll(".bg__group-3");

let y = 0,
  x = 0,
  endX = 0,
  endY = 0;

onmousemove = (e) => {
  endX = innerWidth / 1 - e.x;
  endY = innerHeight / 1 - e.y;
};

function parallax() {
  x += (endX - x) / 5;
  y += (endY - y) / 5;

  group_1.forEach((e) => {
    e.style.transform = `translate(${x / -50}px, ${y / -50}px)`;
  });

  group_2.forEach((e) => {
    e.style.transform = `translate(${x / -15}px, ${y / -15}px)`;
  });

  group_3.forEach((e) => {
    e.style.transform = `translate(${x / -35}px, ${y / -35}px)`;
  });

  requestAnimationFrame(parallax);
}

requestAnimationFrame(parallax);
;
let text = document.querySelector(".user__job p");

setInterval(function () {
  animateCSS(".user__job p", "bounceIn");
  text.textContent = "UI/UX designer!";
}, 2000);
setInterval(function () {
  text.textContent = "Front-End developer";
}, 4000);
setInterval(function () {
  text.textContent = "Photography lover";
}, 6000);
;
const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });;
$(document).ready(function(){
    $('.clients__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,

    });
    $('.clients__slider').removeClass('d-none');
  });;
function scrollToPage() {
  let home = document.querySelector("main");
  let about = document.querySelector(".about");
  let services = document.querySelector(".services");
  let exp = document.querySelector(".experience");
  let recent = document.querySelector(".recent");
  let posts = document.querySelector(".posts");
  let contact = document.querySelector(".contact");
  let navItem = document.getElementsByClassName("nav__item");

  navItem[0].onclick = function () {
    home.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  navItem[1].onclick = function () {
    about.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[2].onclick = function () {
    services.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[3].onclick = function () {
    exp.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[4].onclick = function () {
    recent.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[5].onclick = function () {
    posts.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  navItem[6].onclick = function () {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}

scrollToPage();
;
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

  let nav1 = home.offsetTop;
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
;
function stickyNav() {
  let header = document.querySelector(".header__content");
  if (window.pageYOffset >= 100) {
    header.classList.add("fixed__navbar");
  } else {
    header.classList.remove("fixed__navbar");
  }
}


;
function ToTop() {
  let toTop = document.querySelector(".to-top-btn");
  let home = document.querySelector("main");
  if (window.pageYOffset <= 500) {
    toTop.classList.add("d-none");
  } else {
    toTop.classList.remove("d-none");
  }
  toTop.addEventListener("click", function () {
    home.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}


;

window.onscroll = function () {
  stickyNav();
  ToTop();
  checkScroll();
};

let burgerBtn = document.querySelector('#burgerBtn');
let nav = document.querySelector('.header__nav');
let close = document.querySelector('.closeBtn');
let navItem = document.querySelectorAll('.nav__item');
let body = document.querySelector('body');

burgerBtn.addEventListener("click", function () {
  nav.classList.toggle("mobile");
  
  if (nav.classList.contains("mobile")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
});

close.addEventListener("click", function () {
  nav.classList.remove("mobile");
  body.style.overflow = "visible";
});

for (let i of navItem) {
  i.addEventListener("click", function () {
    if (nav.classList.contains("mobile")) {
    nav.classList.remove("mobile");
    body.style.overflow = "visible";
    }
  });
}