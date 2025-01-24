import HelloWorldPage from "./components/hello-world-page/hello-world-page";

HelloWorldPage.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
