import NavHBS from "./Navbar.hbs"

export class Navbar {

    constructor(parent) {
        this.parent = parent
    }

    render() {
        //this.parent.innerHTML = Handlebars.templates.Navbar;
        this.parent.innerHTML = NavHBS({});
    }
}