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

function animations() {
  let j = 0;

  document.querySelectorAll(".posts__item").forEach((post) => {
    post.setAttribute("data-aos-delay", `${j}`);
    j += 200;
  });

  document
    .querySelectorAll(".title, .experience__item-p, .posts__item")
    .forEach((i) => {
      i.setAttribute("data-aos", "fade-up");
      i.setAttribute("data-aos-duration", "1000");
      i.setAttribute("data-aos-once", "true");
    });
}
