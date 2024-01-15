const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    name: {type: String, required: true, minlength: 3, maxlength: 30},
    email: {
        type: String, 
        required: true, 
        minlength: 3,
        maxlength: 200, 
        unqiue: true
    },
    password: {type: String, required: true, minlength: 3, maxlength: 1024 },
},
{
    timestamps: true,
}
);