import express from "express"

const app = express()

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ limit: "16kb", extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send("Listening...")
})

import userRouter from "./routes/user.routes.js"

app.use("/users", userRouter)

export { app }
