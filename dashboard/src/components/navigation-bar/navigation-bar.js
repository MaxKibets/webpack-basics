import "./navigation-bar.scss";

class NavigationBar {
  render(navItems) {
    const ul = document.createElement("ul");
    ul.classList.add("bar");

    navItems.forEach(({ url, title }) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = url;
      a.textContent = title;

      li.appendChild(a);
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  }
}

export default NavigationBar;
