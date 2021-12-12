import { Request, Response, NextFunction } from "express"
import { Users } from "../db"
import bcrypt from "bcrypt"
import { ResponseSuccess } from "../utils/response"

async function Login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body
  if (!email || !password) {
    return next(new Error("email or password is missing"))
  }
  const user = await Users.findOne({ email })
  if (!user) {
    return next(new Error("user not found"))
  }
  const hash = user.password
  if (bcrypt.compareSync(password, hash)) {
    return res.status(200).json(new ResponseSuccess("Login ok!", []))
  }
  return next(new Error("Wrong email or password"))
}

async function Register(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body
  if (!email || !password) {
    return next(new Error("email or password is missing"))
  }
  const user = await Users.findOne({ email })
  if (user) {
    return next(new Error("User already exists"))
  }
  const pwdHash = await bcrypt.hash(password, 10)
  const data = {
    email,
    password: pwdHash,
  }
  try {
    await Users.insertOne(data)
    return res.status(200).json({ $data: "success" })
  } catch (err) {
    return next(new Error("error while registering user"))
  }
}

const authController = {
  Login,
  Register,
}

export default authController
