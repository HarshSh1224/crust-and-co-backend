import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `Mongo DB Connected!! DB HOST: ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log("DB connection error")
    console.log(error)
    process.exit(1)
  }
}

export default connectDb
