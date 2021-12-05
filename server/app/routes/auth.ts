import { Router } from "express"
import authController from "../controllers/auth"

const router = Router()

router.post("/login", authController.Login)
router.post("/register", authController.Register)

export default router
