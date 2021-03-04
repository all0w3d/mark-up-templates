let header = document.querySelector("#header");
let sticky = header.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("fixed__navbar");
  } else {
    header.classList.remove("fixed__navbar");
  }
}

window.onscroll = function () {
  stickyNav();
};
