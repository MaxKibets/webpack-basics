import "./heading.scss";

class Heading {
  className = "heading";

  render() {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = "Webpack is awesome!";
    h1.classList.add(this.className);
    body.appendChild(h1);
  }
}

export default Heading;
