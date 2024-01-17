const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require ("validator");
const jwt =  require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id}, jwtkey, {expiresIn: "3d"});
}

const registerUser = async(req, res) => {
    try {
        const {name, email, password, confirmPassword} = req.body;

        let user = await userModel.findOne({email});
    
        if(user) 
        return res.status(400).json("User with given email already exist...");
    
        if(!name || !email || !password) 
        return res.status(400).json("All fields are required..");
    
        if(!validator.isEmail(email)) 
        return res.status(400).json("Email must be valid...");
    
        if (!validator.isStrongPassword(password))
        return res.status(400).json("Password must be a strong password...");
    
        if (!validator.isStrongPassword(confirmPassword))
        return res.status(400).json("Password does not match...");

       
        user = new userModel({name, email, password, confirmPassword})
    
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
    
        await user.save();
    
        const token = createToken(user._id);
    
        res.status(200).json({_id: user._id, name, email, token, confirmPassword});
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    } 
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        let user = await userModel.findOne({email});

        if(!user) return res.status(400).json("Invalid email or password...");

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) 
        return res.status(400).json("Invalid email or password...");

        const token = createToken(user._id);
    
        res.status(200).json({_id: user._id, name: user.name, email, token });
  } catch(error){}
};

module.exports = { registerUser, loginUser };