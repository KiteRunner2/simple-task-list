import express, { Request, Response, NextFunction } from "express"
import { connect } from "./db"
import tasksRoutes from "./routes/tasks"
import authRoutes from "./routes/auth"
import bodyParser from "body-parser"
import winston from "winston"
import path from "path"
const PORT = process.env.PORT

const filename = path.join(__dirname, "logfile.log")

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename }),
  ],
})

const app = express()
app.use(bodyParser.json())
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})
app.use("/todos", tasksRoutes)
app.use("/auth", authRoutes)

connect()

app.listen(PORT, () => {
  logger.log({ level: "info", message: `Application started on port ${PORT}` })
})
