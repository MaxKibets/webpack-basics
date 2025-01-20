import Heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import addImage from "./add-image";

const heading = new Heading();
const button = new HelloWorldButton();

heading.render();
button.render();
addImage();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}
