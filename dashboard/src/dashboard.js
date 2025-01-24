const url = window.location.pathname;

console.log("dashboard!", url);

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
