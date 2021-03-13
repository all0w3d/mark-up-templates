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
