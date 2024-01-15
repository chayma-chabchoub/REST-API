const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    name:String,
    email:{type:String,required:true},
    age:Number
})

const User= mongoose.model("User",userschema)
module.exports= User