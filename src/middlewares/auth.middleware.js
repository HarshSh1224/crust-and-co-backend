import ApiError from "../utils/api_error.js"
import asyncHandler from "../utils/async_handler.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

const verifyJwt = asyncHandler(async (req, _, next) => {
  const accessToken = req.header("Authorization")?.replace("Bearer ", "")

  if (!accessToken) {
    throw new ApiError(401, "Unauthorized Request")
  }

  let decodedToken

  try {
    decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
  } catch (error) {
    throw new ApiError(401, "Unauthorized request")
  }

  const user = await User.findById(decodedToken._id).select(
    "-password -refreshToken"
  )

  if (!user) {
    throw new ApiError(400, "Invalid Token")
  }
  req.user = user
  next()
})

export default verifyJwt
