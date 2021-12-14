import session from "express-session"
import logger from "../logger"
const MongoDBStore = require("connect-mongodb-session")(session)

export const sessionStore = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: "mySessions",
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
  store: sessionStore,
}

export const sess = session(sessionParams)

sessionStore.on("error", function (error: any) {
  logger.log({
    level: "error",
    message: "Error initializing store for sessions",
  })
})
