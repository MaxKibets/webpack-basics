import "./hello-world-button.css";

class HelloWorldButton {
  init() {
    this.render();
    this.initHandler();
  }

  render() {
    this.button = document.createElement("button");
    this.button.innerHTML = "Hello World";
    this.button.classList.add("button");
    this.body = document.querySelector("body");
    this.body.appendChild(this.button);
  }

  initHandler() {
    this.button.onclick = () => this.renderParagraph();
  }

  renderParagraph() {
    const p = document.createElement("p");
    p.innerHTML = "Hello World";
    p.classList.add("text");
    this.body.appendChild(p);
  }
}

export default HelloWorldButton;
