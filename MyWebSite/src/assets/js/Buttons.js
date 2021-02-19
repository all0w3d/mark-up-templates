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