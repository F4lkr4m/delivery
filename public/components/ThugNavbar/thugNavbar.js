import Navbar from "./Navbar.pug"

export class thugNavbar {

    constructor(parent) {
        this.parent = parent
    }

    render() {
        this.parent.innerHTML = Navbar({text: "Hello hello"});
    }
}