import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

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