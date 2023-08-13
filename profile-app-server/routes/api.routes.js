const router = require("express").Router();
const User = require("../models/User.model").default;
const { isAuthenticated } = require("../middleware/jwt.middleware")
const fileUploader = require("../config/cloudinary.config");