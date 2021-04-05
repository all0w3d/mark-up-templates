function textChange() {
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
}

export default textChange;
