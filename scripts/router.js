class Router {
    /**
     * Initial method.
     *
     * @return {void}.
     */
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    /**
     * Allows you to initialize the router.
     *
     * @return {void}.
     */
    initRouter() {
        const { location: {pathname = window.location.pathname} } = window;
        const url = pathname === window.location.pathname ? "home" : pathname.replace("/", "");
        this.load(url);
    }

    /**
     * Lets you start loading pages.
     *
     * @return {void}.
     */
    load(page = "home") {
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.getElementById("root");
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "Genial", path);
    }

}
