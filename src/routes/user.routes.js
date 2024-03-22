import { Router } from "express"
import verifyJwt from "../middlewares/auth.middleware.js"
import {
  refreshAccessToken,
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

// Authenticated routes

router.route("/refresh-token").post(refreshAccessToken)
router.route("/current-user").get(verifyJwt, getCurrentUser)

export default router
