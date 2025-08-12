const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors({
  origin: 'https://frontend-2pst.onrender.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// MongoDB connection

mongoose.connect(mongoURI)
    .then(() => console.log('Đã kết nối thành công đến MongoDB!'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Import central route file from app/
const routes = require('./app/route');
app.use('/', routes);

module.exports = app;