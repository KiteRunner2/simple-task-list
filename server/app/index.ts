import express, { Request, Response, NextFunction } from "express"
import { connect } from "./db"
import tasksRoutes from "./routes/tasks"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use("/todos", tasksRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})
connect()

app.listen(3000, () => {
  console.log("app started")
})
