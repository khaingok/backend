const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://24560026:1621265437@cluster0.qexyw2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI)
    .then(() => console.log('Đã kết nối thành công đến MongoDB!'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Import central route file from app/
const routes = require('./app/route');
app.use('/', routes);

module.exports = app;