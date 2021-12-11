import logger from "../logger"
import { MongoClient } from "mongodb"
require("dotenv").config()
const dbUrl = (process.env as { DB_URL: string }).DB_URL
export const client = new MongoClient(dbUrl)

export async function connectToDatabase() {
  try {
    await client.connect()
    logger.log({ level: "info", message: "Database connected" })
  } catch (err) {
    logger.log({ level: "error", message: "Could not connect to database!" })
    process.exit(1)
  }
}

export const Users = client.db("tasks-db").collection("users")
export const Tasks = client.db("tasks-db").collection("tasks")
