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
  });
