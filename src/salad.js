import Heading from "./components/heading/heading";
import SaladImage from "./components/salad-image/salad-image";
import React from "react";

const heading = new Heading();
const image = new SaladImage();

heading.render("Hello world");
image.render();
