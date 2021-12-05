import express, { Request, Response, NextFunction } from "express"
import { connect } from "./db"
import tasksRoutes from "./routes/tasks"
import authRoutes from "./routes/auth"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})
app.use("/todos", tasksRoutes)
app.use("/auth", authRoutes)

connect()

app.listen(5000, () => {
  console.log("app started")
})
