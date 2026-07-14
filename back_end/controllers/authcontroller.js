const mongoose = require('mongoose');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const new_user = async (req, res) => {
  const { username, email, password } = req.body;
  const pfp = Math.floor(Math.random() * 11) + 1;

  try {
    const user_exist = await User.findOne({ email });
    if (user_exist) {
      return res.status(400).json({ message: "user already exists" });
    }

    const saved_user = await User.create({
      username,
      email,
      password,
      pfp
    });

    const token = jwt.sign({ id: saved_user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });


    res.status(201).json({
      message: "user created successfully",
      user: saved_user,
      token,
      pfp
    });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};

const login_user = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

    res.status(200).json({ message: "login successful", user, token, pfp: user.pfp });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { new_user, login_user };