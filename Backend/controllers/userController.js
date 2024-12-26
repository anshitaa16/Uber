const userModel = require("../models/user.model");
const userService = require("../services/userServices");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklistToken");

module.exports.registerUser = async (req, res,next) => {

     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }

     console.log(req.body);

     const { fullname, email, password } = req.body;

     const isUserAlreadyExists = await userService.getUserByEmail(email);

     if (isUserAlreadyExists) {
          return res.status(400).json({ message: "User already exists" });
     }

     const hashedPassword = await userModel.hashPassword(password);

     const user = await userService.createUser({ firstname: fullname.firstname, lastname: fullname.lastname , email, password: hashedPassword });

     const token = user.generateAuthToken();

     res.status(201).json({ user, token });

}

module.exports.loginUser = async (req, res) => {

     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }

     const { email, password } = req.body;

     const user = await userModel.findOne({ email }).select("+password"); 

     if (!user) {
          return res.status(401).json({ message: "Invalid email or password" });
     }

     const isMatch = await user.comparePassword(password);

     if (!isMatch) {
          return res.status(401).json({ message: "Invalid email or password" });
     }

     const token = user.generateAuthToken();

     res.cookie("token", token);

      

     res.status(200).json({ user, token });
}

module.exports.getUserProfile = async (req, res) => {
     res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res) => {
     res.clearCookie("token");
     const token = req.cookies.token || req.headers.authorization.split(" ")[1];

     // await BlacklistToken.create({ token });

     res.status(200).json({ message: "Logged out successfully" });
}