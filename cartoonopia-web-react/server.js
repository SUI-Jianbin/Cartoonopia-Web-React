/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : server.js for starting a server
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB is Connected！'))
    .catch(err => console.log('MongoDB connection error: ',err));

// Routes
app.use('/userlist', require('./routes/user-route'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));