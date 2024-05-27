import { Router } from "express"
import { getAllFoodItems } from "../controllers/food_items.controller.js"

const router = Router()

router.route("/all").get(getAllFoodItems)

export default router
