import Salad from "./salad.jpg";
import altText from "./alt-text.txt";

class SaladImaga {
  className = "image";

  render() {
    const body = document.querySelector("body");
    const img = document.createElement("img");
    img.alt = altText;
    img.src = Salad;
    img.classList.add(this.className);
    body.appendChild(img);
  }
}

export default SaladImaga;
