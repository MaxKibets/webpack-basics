import Salad from "./salad.jpg";
import altText from "./alt-text.txt";

function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = Salad;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
