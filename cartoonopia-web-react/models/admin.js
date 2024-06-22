/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : this is user admin model
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

});

const Admin = mongoose.model('admin', adminSchema, 'adminlist');

module.exports = Admin;