 // import {Navbar} from "./components/Navbar/Navbar.js";
 import {thugNavbar} from "./components/ThugNavbar/thugNavbar.js"
 import {Page} from "./components/Page/Page.js"

const application = document.getElementById("app");

let hello = document.createElement("h1");
hello.textContent = 'Hello World'

const nav = new thugNavbar(application);
nav.render("hello");



application.appendChild(hello);