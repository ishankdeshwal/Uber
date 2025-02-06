const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const userController=require('../Controllers/user.controller')
router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("Must be  atleast 3 alphabets"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Must be  atleast 6 Characters"),
],
userController.registerUser

);

module.exports = router;
