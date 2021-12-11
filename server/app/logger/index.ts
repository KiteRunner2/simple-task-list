import winston from "winston"
import path from "path"

const filename = path.join(__dirname, "logfile.log")

export default winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename }),
  ],
})
