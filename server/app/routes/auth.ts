import { Router } from "express"
import authController from "../controllers/auth"
import { Request, Response, NextFunction } from "express"
import { sessionStore } from "../express/session"
import { ErrorResponse } from "../utils/response"

async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session.id) {
    return next()
  }

  sessionStore.get(req.session.id, (err: any, session: any) => {
    if (err) {
      throw new Error("Error while getting session")
    }
    if (!session) {
      return res.status(401).json(new ErrorResponse("You need to login first."))
    }
    next()
  })
}

const router = Router()

router.post("/login", isAuthenticated, authController.Login)
router.post("/register", authController.Register)

export default router
