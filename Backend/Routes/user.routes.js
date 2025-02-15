const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const userController=require('../Controllers/user.controller')
const authMiddleware=require('../Middlewares/auth.middleware');
const { route } = require("../app");



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
router.post('/login',[
  body("email").isEmail().withMessage("Invalid Email"),
  body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]
,userController.loginUser
)
router.get('/profile',authMiddleware.authUser,
  userController.getUserProfile)
module.exports = router;
router.get('/logout',authMiddleware.authUser,userController.logoutUser)