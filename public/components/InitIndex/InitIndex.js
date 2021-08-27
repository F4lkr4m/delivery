import renderIndex from "./IndexTmpl.pug";

export class InitIndex {
    constructor({
        root = document.body
    } = {}) {
        this.root = root;
    }

    render() {
        this.root.innerHTML = renderIndex({});
    }

    getViewPlace() {
        return this.root.querySelector('main');
    }

    getNavbarPlace() {
        return this.root.querySelector('header');
    }
}