import { Request, Response, NextFunction, Express } from "express"
import tasksRoutes from "../routes/tasks"
import authRoutes from "../routes/auth"
import bodyParser from "body-parser"

export default function Init(app: Express) {
  app.use(bodyParser.json())

  app.use("/api/v1/todos", tasksRoutes)

  app.use("/api/v1/auth", authRoutes)

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ message: err.message })
  })
}
