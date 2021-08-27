 // import {Navbar} from "./components/Navbar/Navbar.js";
 import {thugNavbar} from "./components/ThugNavbar/thugNavbar.js"
 import { Router } from "./modules/router.js"
 import { InitIndex } from "./components/InitIndex/InitIndex";

 const app = document.getElementById("app");
 const router = new Router(app);
const goFunc = (page) => router.openPage(page);

const initIndex = new InitIndex({root: app});
initIndex.render();
const navbarView = initIndex.getNavbarPlace();
const view = initIndex.getViewPlace();



