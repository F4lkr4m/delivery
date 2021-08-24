 // import {Navbar} from "./components/Navbar/Navbar.js";
 import {thugNavbar} from "./components/ThugNavbar/thugNavbar.js"

const application = document.getElementById("app");

let hello = document.createElement("h1");
hello.textContent = 'Hello World'

const nav = new thugNavbar(application);
nav.render();
 application.appendChild(hello);