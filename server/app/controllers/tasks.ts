import { Request, Response, NextFunction } from "express"
import { Tasks } from "../db"
import Task from "../db/models/task"

export async function addTodo(req: Request, res: Response, next: NextFunction) {
  const text = req.body.text
  const user = req.body.user
  const newTask = new Task(text, user)
  try {
    await Tasks.insertOne(newTask)
  } catch (err) {
    console.log(err)
  }
  try {
    const toSend = await Tasks.find().toArray()
    res.status(200).json(toSend)
  } catch (err) {
    console.log(err)
    next(new Error("Could not send response!"))
  }
}
