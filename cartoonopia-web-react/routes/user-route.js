/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : this is user route
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;