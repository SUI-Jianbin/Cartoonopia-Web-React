/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : this is user model
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

});

// Encrypt Password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model('user', userSchema, 'userlist');

module.exports = User;
