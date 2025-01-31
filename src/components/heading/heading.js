import "./heading.scss";

class Heading {
  className = "heading";

  render(headingText) {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = headingText;
    h1.classList.add(this.className);
    body.appendChild(h1);
  }
}

export default Heading;
