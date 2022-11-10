const mongoose = require("mongoose");

// create schema ( format ) for database


const userSchema = new mongoose.Schema({
    username:String,
    password:String

})
module.exports =  mongoose.model("loginuser",userSchema);