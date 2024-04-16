import { Router } from "express"
import { getAllPizzas } from "../controllers/products.controller.js"

const router = Router()

router.route("/pizzas").get(getAllPizzas)

export default router
