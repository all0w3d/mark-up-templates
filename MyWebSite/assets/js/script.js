document.addEventListener(
  "DOMContentLoaded",
  function () {

    let btnContact = (document.getElementById(
      "btn_contact"
    ).onclick = function () {
      document.location.href = "#contacts";
    });
    let btnGoDown = (document.getElementById("go_down").onclick = function () {
      document.location.href = "#about";
    });



    const anchors = document.querySelectorAll('a.scroll-to')




    let typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    });
  },
  false
);
