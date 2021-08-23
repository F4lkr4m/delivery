export class Navbar {

    constructor(parent) {
        this.parent = parent
    }

    render() {
        this.parent.innerHTML = Handlebars.templates.Navbar;
    }
}