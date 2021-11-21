export default class Task {
  deleted: boolean
  text: string
  createdAt: Date
  user: string
  constructor(text: string, user: string) {
    this.text = text
    this.createdAt = new Date()
    this.deleted = false
    this.user = user
  }
}
