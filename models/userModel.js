const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 
  username: {
    type: String,
    required: [true, "Please provide user name"],
    unique: true,
  },
  email:{
    type:String,
    required:[true,"please provide your emai"],
    unique:true

  },
  mobileno:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true,
      unique:true
  }


},{collection:"users"});

const user = mongoose.model("users", userSchema);

module.exports = user;
