import NavigationBar from "./components/navigation-bar/navigation-bar.js";
const navItems = [
  {
    url: "/hello-world",
    title: "Hello World",
  },
  {
    url: "/kiwi",
    title: "Kiwi",
  },
];

const navirationBar = new NavigationBar();
navirationBar.render(navItems);

const url = window.location.pathname;

if (url === "/hello-world") {
  import("HelloWorldApp/hello-world-page").then(
    ({ default: HelloWorldPage }) => {
      const helloWorldPage = new HelloWorldPage();

      helloWorldPage.render();
    }
  );
} else if (url === "/kiwi") {
  import("KiwiApp/kiwi-page").then(({ default: KiwiPage }) => {
    const kiwiPage = new KiwiPage();

    kiwiPage.render();
  });
}
