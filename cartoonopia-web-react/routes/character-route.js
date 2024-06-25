/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : character route
 *@Version       : 1.0.0.0
 *@Create        :2024-06-23
 *@Author        :Jianbin
 */

const express = require('express');
const router = express.Router();
const characterController = require('../controllers/CharacterController');

router.get('/getallcharacters', characterController.getAllCharacters);

module.exports = router;