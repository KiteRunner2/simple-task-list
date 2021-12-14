import { Request, Response, NextFunction, Express } from "express"
import tasksRoutes from "../routes/tasks"
import authRoutes from "../routes/auth"
import bodyParser from "body-parser"
import { ErrorResponse } from "../utils/response"
import session from "express-session"
import logger from "../logger"
const MongoDBStore = require("connect-mongodb-session")(session)

const store = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: "mySessions",
})

store.on("error", function (error: any) {
  logger.log({
    level: "error",
    message: "Error initializing store for sessions",
  })
})

const sessionSecret = process.env.SESSION_SECRET || ""

const sessionParams = {
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    path: "/",
  },
  store,
}

export default function Init(app: Express) {
  app.use(session(sessionParams))

  app.use(bodyParser.json())

  app.use("/api/v1/todos", tasksRoutes)

  app.use("/api/v1/auth", authRoutes)

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json(new ErrorResponse(err.message))
  })
}
