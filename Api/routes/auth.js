const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Sign up
router.post("/register", async (req, res) => {
  try {
    // Check if the user already exists by email or username
    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (existingUser) {
      return res.status(400).json("Username or email already exists.");
    }

    // Encrypt the password using a strong hashing algorithm
    const hashedPassword = cryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC
    ).toString();

    // Create a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Sign in
router.post("/login", async (req, res) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }

    // Decrypt the stored password and compare it with the provided password
    const hashedPassword = cryptoJS.AES.decrypt(user.password, process.env.SEC);
    const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong credentials!");
    }

    // Generate and return a JWT token for authentication
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET, // Use a different secret for JWT
      { expiresIn: "3d" }
    );

    // Send user data without the password in the response
    const { password, ...userData } = user._doc;

    res.status(200).json({ ...userData, accessToken });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
