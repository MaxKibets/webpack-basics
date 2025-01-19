import "./hello-world-button.scss";

class HelloWorldButton {
  buttonClassName = "button";
  paragraphClassName = "text";

  render() {
    this.button = document.createElement("button");
    this.button.innerHTML = "Hello World";
    this.button.classList.add(this.buttonClassName);
    this.button.onclick = () => this.renderParagraph();
    this.body = document.querySelector("body");
    this.body.appendChild(this.button);
  }

  renderParagraph() {
    const p = document.createElement("p");
    p.innerHTML = "Hello World";
    p.classList.add(this.paragraphClassName);
    this.body.appendChild(p);
  }
}

export default HelloWorldButton;
