const express = require('express');
const router = express.Router();
const {body}=require('express-validator')
const captainController=require('../Controllers/captain.controller')
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Must be atleast 3 alphabets'),
    body('password').isLength({min:6}).withMessage('Must be atleast 6 Characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Must be atleast 3 Characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Must be atleast 3 Characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Must be atleast 3 Characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Must be atleast 1 capacity'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Invalid Vehicle Type'),
],captainController.registerCaptain)


module.exports = router;