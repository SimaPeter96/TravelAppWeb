const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config()

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send ("Sign In app APIs..")
});

const port = process.env.PORT || 5001; 
const uri = process.env.ATLAS_URI; 

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("MongoDB connection established")).catch((error) => console.log("MongoDB connection failed: ", error.message))