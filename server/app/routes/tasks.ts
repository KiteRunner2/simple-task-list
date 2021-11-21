import { Router } from "express"
import { addTodo } from "../controllers/tasks"

const router = Router()

router.post("/", addTodo)

router.get("/")

router.patch("/:id")

export default router
