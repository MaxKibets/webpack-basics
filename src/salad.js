import _ from "lodash";
import Heading from "./components/heading/heading";
import SaladImage from "./components/salad-image/salad-image";

const heading = new Heading();
const image = new SaladImage();

heading.render(_.upperFirst("Hello world"));
image.render();
