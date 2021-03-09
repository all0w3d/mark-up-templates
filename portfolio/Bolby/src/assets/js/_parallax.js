const block_1 = document.querySelector(".bg__item-1");
const block_2 = document.querySelector(".bg__item-2");
const block_3 = document.querySelector(".bg__item-3");
const block_4 = document.querySelector(".bg__item-4");
const block_5 = document.querySelector(".bg__item-5");
const block_6 = document.querySelector(".bg__item-6");
const block_7 = document.querySelector(".bg__item-7");
const block_8 = document.querySelector(".bg__item-8");
const block_9 = document.querySelector(".bg__item-9");

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

  block_1.style.transform = `translate(${x / -50}px, ${y / -50}px)`;
  block_2.style.transform = `translate(${x / -50}px, ${y / -50}px)`;
  block_3.style.transform = `translate(${x / -50}px, ${y / -50}px)`;

  block_4.style.transform = `translate(${x / -15}px, ${y / -15}px)`;
  block_5.style.transform = `translate(${x / -15}px, ${y / -15}px)`;
  block_6.style.transform = `translate(${x / -15}px, ${y / -15}px)`;

  block_7.style.transform = `translate(${x / -35}px, ${y / -35}px)`;
  block_8.style.transform = `translate(${x / -35}px, ${y / -35}px)`;
  block_9.style.transform = `translate(${x / -35}px, ${y / -35}px)`;

  requestAnimationFrame(parallax);
}

requestAnimationFrame(parallax);
