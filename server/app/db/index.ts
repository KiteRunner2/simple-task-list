import { MongoClient } from "mongodb"
require("dotenv").config()
const dbUrl = (process.env as { DB_URL: string }).DB_URL
export const client = new MongoClient(dbUrl)

export async function connect() {
  try {
    await client.connect()
    console.log("db connected")
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

export const Users = client.db("tasks-db").collection("users")
export const Tasks = client.db("tasks-db").collection("tasks")
