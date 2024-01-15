const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require ("validator");
const jwt =  require("jsonwebtoken");

const registerUser = (req, res) => {
    res.send("Register...");
};

module.exports = { registerUser };