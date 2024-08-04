const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) return res.status(400).send('User already exists.');

    user = new User({ username, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Invalid credentials.');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
};
