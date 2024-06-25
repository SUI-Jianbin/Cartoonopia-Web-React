/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : character controller
 *@Version       : 1.0.0.0
 *@Create        :2024-06-23
 *@Author        :Jianbin
 */

const Character = require('../models/character');

exports.getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find({ "active" : true });
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving active characters: " + error.message });
    }
};