function parallaxMain() {
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
}
