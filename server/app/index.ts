import express from "express"
import InitExpress from "./express"
import { connectToDatabase } from "./db"

import logger from "./logger"

const PORT = process.env.PORT

const app = express()

InitExpress(app)

connectToDatabase()

app.listen(PORT, () => {
  logger.log({ level: "info", message: `Application started on port ${PORT}` })
})
