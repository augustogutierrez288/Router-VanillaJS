const ROUTER = new Router(PATHS);

const home = document.getElementById("home");
const product = document.getElementById("product");
const about = document.getElementById("about");

home.addEventListener("click", () => { ROUTER.load("home") });
product.addEventListener("click", () => {ROUTER.load("product")});
about.addEventListener("click", () => {ROUTER.load("about")});


