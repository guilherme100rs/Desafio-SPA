import {Router} from "./router.js"

const router = new Router()
router.add("/","pages/home.html")
router.add("/universe","/pages/universe.html")
router.add("/explore","/pages/explore.html")
router.add("/Terra","/pages/Terra.html")
router.add("/Planeta","/pages/Planeta.html")

router.handle()

window.addEventListener(`popstate`, () => {
    router.handle()
})

window.route = () => {
    router.route()
}
