const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/ErrorResponse");

// @desc      Register user
// @route     POST /api/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (!(email && password && lastName && firstName && role)) {
    res.status(400).send("All input are required");
  }

  const check_user = await User.findOne({ email });

  if (check_user) {
    return res.status(409).json("user already exist!");
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/auth/login
// @access    Private
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }
  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }
  // create token
  sendTokenResponse(user, 200, res);
});

// to send the http token response
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};

// @desc      Get Current Logged in User
// @route     POST /api/auth/me
// @access    Public
exports.getMe = asyncHandler(async (req, res, next) => {
  const authenticatedUser = await req.user;
  res.status(200).json({ success: true, data: authenticatedUser });
});
