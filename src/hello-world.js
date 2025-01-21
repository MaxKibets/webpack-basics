import React from "react";
import Heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";

const heading = new Heading();
const button = new HelloWorldButton();

heading.render("Hello world");
button.render();
