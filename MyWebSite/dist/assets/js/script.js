document.addEventListener(
    "DOMContentLoaded",
    function () {
  
      document.getElementById(
        "btn_contact"
      ).onclick = function () {
        document.location.href = "#contacts";
      };
      document.getElementById("go_down").onclick = function () {
        document.location.href = "#about";
      };
  
    }
  );
document.addEventListener(
  "DOMContentLoaded",
  function () {

    let typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    });
  },
  false
);