/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : this is user controller
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

const bcrypt = require('bcryptjs');
const User= require('../models/user');
const Admin= require('../models/admin');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        // Checking if user already exists
        if (!user) {
            return res.status(400).json({ message: 'User is not found, please try a valid email to login!' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password, please try again!' });
        }
        const adminRole = await Admin.find({});
        res.status(200).json({user, adminRole});
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        // Checking if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists, please use another email!' });
        }
        const newUser = new User({
            firstname,
            lastname,
            email,
            password,
        });
        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'You have registered successfully!' });
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ message: err.message });
    }
};



