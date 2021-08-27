const urls = {
    main: {
        standardUrl: '/',
        regularUrl: null
    },
    signup: {
        standardUrl: '/signup',
        regularUrl: null
    },
    signin: {
        standardUrl: '/signin',
        regularUrl: null
    },
    logout: {
        standardUrl: 'logout',
        regularUrl: null
    }
}

export class Router {
    constructor(params) {
        this.params = params;
        this.routes = new Map();
        this.followLinks = this.followLinks.bind(this);
        this.params.addEventListener('click', this.followLinks);
        window.addEventListener('popstate', (event) => {
            this.openPage(window.location.pathname, true);
        })
    }

    windowHistory(page, isBack) {
        if (!isBack) {
            window.history.pushState({}, '', page);
        }

        window.history.replaceState({}, '', page);
    }

    addRoute(page, handler) {
        this.routes.set(page, handler)
    }

    openPage(page, isBack = false) {
        Object.entries(urls).forEach(([url, { standardUrl, regularUrl}]) => {
            if (page === url && isBack && url === 'logout') {
                this.openPage('main', isBack);
                return;
            }

            if (page === url || (regularUrl && regularUrl.test(page))) {
                if (page === url) {
                    page = standardUrl
                }

                this.windowHistory(page, isBack);

                if (this.routes.get(url)) {
                    this.routes.get(url).render(page);
                } else {
                    this.openPage('main', isBack);
                }

            }
        })
    }

    followLinks(event) {
        if (event.target.closest('a') instanceof HTMLAnchorElement) {
            if (event.target.closest('a').href === event.includes('#')) {
                event.preventDefault();
                return;
            }

            event.preventDefault();
            const link = event.target.closest('a').pathname;
            this.openPage(link);
        }

        if (event.target instanceof HTMLBaseElement) {
            event.preventDefault();
        }
    }
}