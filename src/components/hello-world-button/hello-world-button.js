import "./hello-world-button.css";

class HelloWorldButton {
  buttonCssClass = "button";
  paragraphCssClass = "text";

  init() {
    this.render();
    this.initHandler();
  }

  render() {
    this.button = document.createElement("button");
    this.button.innerHTML = "Hello World";
    this.button.classList.add(this.buttonCssClass);
    this.body = document.querySelector("body");
    this.body.appendChild(this.button);
  }

  initHandler() {
    this.button.onclick = () => this.renderParagraph();
  }

  renderParagraph() {
    const p = document.createElement("p");
    p.innerHTML = "Hello World";
    p.classList.add(this.paragraphCssClass);
    this.body.appendChild(p);
  }
}

export default HelloWorldButton;
