const mongoose = require("mongoose");

// create schema ( format ) for database


const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String

})
module.exports =  mongoose.model("registeruser",userSchema);