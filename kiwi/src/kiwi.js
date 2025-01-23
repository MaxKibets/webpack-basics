import Heading from "./components/heading/heading.js";
import KiwiImage from "./components/kiwi-image/kiwi-image.js";

const heading = new Heading();
heading.render();
const kiwiImage = new KiwiImage();
kiwiImage.render();

import("HelloWorldApp/hello-world-button").then((module) => {
  const HelloWorldButton = module.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
});
