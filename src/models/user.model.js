import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({

  username:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true, 
    index: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowecase: true,
    trim: true, 
  },
  fullName:{
    type: String,
    required: true,
    trim: true, 
    index: true
  },
  avatar:{
    type: String,  //cloudinary url
    required: true
  },
  coverImage:{     //cloudinary url
    type: String,
  },
  password:{
    type: String,
    required: [true, 'Password is required']
  },
  refreshToken:{
  type: String
  },
  watchHistory:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }
],
},{timestamps:true})



// store encrypt password in DB
userSchema.pre("save",async function(next){
  if(!this.isModified("password")) return next(); //if password field is not modified, then do nothing
this.password = bcrypt.hash(this.password,10)
next()
})


//custom method to check password
userSchema.methods.isPasswordCorrect = async function(password){

  return await bcrypt.compare(password,this.password) //returns true or false
}


//GENERATE ACCESS TOKEN (NO AWAIT REQUIRED)
userSchema.methods.generateAccessToken = function(){

  return jwt.sign({
    _id:this._id,
    email:this.email,
    username:this.username,
    fullName:this.fullName
  }, 
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  })

}


//GENERATE REFRESH TOKEN (NO AWAIT REQUIRED)
userSchema.methods.generateRefreshToken = function(){

  return jwt.sign({
    _id:this._id,
  }, 
  process.env.RFERESH_TOKEN_SECRET,
  {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  })
}


export const User = mongoose.model("User",userSchema);