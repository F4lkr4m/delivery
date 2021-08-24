import PageTemp from "./Page.pug"
import Navbar from "../ThugNavbar/Navbar.pug"

export class Page {

    constructor(parent) {
        this.parent = parent
    }

    render(header) {
        this.parent.innerHTML = PageTemp({text: header});
    }
}