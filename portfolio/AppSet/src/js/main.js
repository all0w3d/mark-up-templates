import "../scss/main.scss";
import "../index.html";
import "./modules/header";
import "./modules/counter";
import "./modules/modal";
import "./modules/burger";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

//slider

tns({
  container: ".slider",
  items: 1,
  controls: false,
  navAsThumbnails: true,
  autoplayButtonOutput: false,
  navPosition: "bottom",
  speed: 600,
  mouseDrag: true,
  responsive: {
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
