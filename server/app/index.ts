import express from "express"
import InitExpress from "./express"
import { connectToDatabase } from "./db"

import logger from "./logger"

const PORT = process.env.PORT

const app = express()

InitExpress(app)

connectToDatabase()

// TODO Add gracefull shutdown for database connection
// Add gracefull shutdown for database connection
process.on("SIGTERM", () => {
  logger.log({ level: "info", message: "Terminating!" })
  process.exit(1)
})

process.on("SIGINT", () => {
  logger.log({ level: "info", message: "Terminating!" })
  process.exit(1)
})

app.listen(PORT, () => {
  logger.log({ level: "info", message: `Application started on port ${PORT}` })
})
