import { Request, Response, NextFunction, Express } from "express"
import tasksRoutes from "../routes/tasks"
import authRoutes from "../routes/auth"
import bodyParser from "body-parser"

export default function Init(app: Express) {
  app.use(bodyParser.json())

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message })
  })

  app.use("/api/v1/todos", tasksRoutes)

  app.use("/api/v1/auth", authRoutes)
}
