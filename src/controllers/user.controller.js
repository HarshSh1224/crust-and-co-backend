import asyncHandler from "../utils/async_handler.js"
import ApiError from "../utils/api_error.js"
import { ApiResponse } from "../utils/api_response.js"
import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"

const registerUser = asyncHandler(async (req, res) => {
  // PROCESS

  // 1. CHECK IF ALL FIELDS ARE PROVIDED AND ARE NOT EMPTY
  // 2. CHECK IF USER ALREADY EXISTS
  // 3. CREATE USER
  // 4. RESPOND WITH USER

  const { fullName, email, password } = req.body

  if (!fullName || !email || !password) {
    throw new ApiError(400, "All fields are required")
  }

  if ([email, fullName, password].some((val) => val?.trim() === "")) {
    throw new ApiError(400, "All Fields are required")
  }

  const userExits = await User.findOne({
    email,
  })

  if (userExits) {
    throw new ApiError(400, "User with this email already exists")
  }

  const user = await User.create({
    fullName,
    email,
    password,
  })

  const createdUser = await User.findById(user._id)

  if (!createdUser) {
    throw new ApiError(500, "Internal server error")
  }

  res.status(200).json(new ApiResponse(201, createdUser, "Create success"))
})

const loginUser = asyncHandler(async (req, res) => {
  // Process

  // 1. Obtain email and pass from req body
  // 2. Validate email and pass
  // 3. Check if such a user exists or not
  // 4. Check if password is correct or not
  // 5. Generate access and refresh tokens
  // 6. Send acc token, ref token and user (w/o rf token and pass)

  const { email, password } = req.body

  if (!email || !password) {
    throw new ApiError(400, "All fields are required")
  }
  if ([email, password].some((val) => val?.trim() === "")) {
    throw new ApiError(400, "All fields are required")
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new ApiError(400, "User does not exist")
  }

  const passwordCorrect = await user.isPasswordCorrect(password)

  if (!passwordCorrect) {
    throw new ApiError(400, "Incorrect Password")
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  )

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )

  res.status(200).json(
    new ApiResponse(
      200,
      {
        accessToken,
        refreshToken,
        user: loggedInUser,
      },
      "Login Successful"
    )
  )
})

const refreshAccessToken = asyncHandler(async (req, res) => {
  // PROCEDURE

  // 1. Obtain token from req body, validate.
  // 2. Decode token and find any associated user
  // 3. Match the token with token under user doc
  // 4. Generate and return new acc and rf tokens

  const incomingRefreshToken = req.body.refreshToken
  if (!incomingRefreshToken || incomingRefreshToken?.trim() === "") {
    throw new ApiError(401, "Unauthorized request")
  }

  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  )

  const user = await User.findById(decodedToken._id)

  if (!user) {
    throw new ApiError(401, "Invalid token")
  }

  if (incomingRefreshToken != user.refreshToken) {
    throw new ApiError(401, "Invalid token")
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  )

  res.status(200).json(
    new ApiResponse(
      200,
      {
        accessToken,
        refreshToken,
      },
      "Token refreshed successfully"
    )
  )
})

const getCurrentUser = asyncHandler(async (req, res) => {
  res.json(new ApiResponse(200, req.user))
})

export { registerUser, loginUser, refreshAccessToken, getCurrentUser }

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId)

    const accessToken = user.getAccessToken()
    const refreshToken = user.getRefreshToken()

    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })

    return { accessToken, refreshToken }
  } catch (error) {
    throw new ApiError(
      500,
      "Server error while generating authentication tokens"
    )
  }
}
