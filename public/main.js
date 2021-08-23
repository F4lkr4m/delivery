 import {Navbar} from "./components/Navbar/Navbar.js";

const application = document.getElementById("app");

let hello = document.createElement("h1");
hello.textContent = "Hello world";

application.appendChild(hello);
const nav = new Navbar(application);
nav.render();