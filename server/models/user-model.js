const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
}); 

// secure the password with bcrypt using userSchema premethod
userSchema.pre('save' ,async function(next){
    const user = this;
    if(!user.isModified('password')){
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, salt) ;
        user.password = hash_password;
    }catch(error){
       next(error);
    }
});

// json web tokens
userSchema.methods.generateToken = async function(){
    try {
       return jwt.sign({
        userId: this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
       },
      process.env.JWT_SELECT_KEY,
      {
        expiresIn: "30d" ,
      }
    ); 
    // console.log('Generated token:', token);
    // const decodedToken = jwt.decode(token, { complete: true });
    // console.log('Token contents:', decodedToken);
    } catch (error) {
        console.error(error);
    }
};

//define the model or collection name
const User = new mongoose.model("User" , userSchema);
module.exports = User;