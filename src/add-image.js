import Salad from "./salad.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "Image";
  img.width = 300;
  img.src = Salad;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
