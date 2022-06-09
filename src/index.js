import Heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";

const heading = new Heading();
const heading2 = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
heading2.render();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}

helloWorldButton.methodThatDoesNotExist();
