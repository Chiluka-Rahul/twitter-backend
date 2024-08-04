require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes.js');
const tweetRoutes = require('./routes/tweetRoutes.js');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/users', authRoutes);
app.use('/api/tweets', tweetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
