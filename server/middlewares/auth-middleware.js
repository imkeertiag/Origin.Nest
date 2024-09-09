const jwt = require("jsonwebtoken") ;
const User = require("../models/user-model");

const authmiddleware = async (req , res , next) => {
  const token = req.header("Authorization");
  if(!token){
    //If you attempt to use an expired token, you will recieve a "401 Unauthorizes HTTP" response.
    return res.status(401).json({ message: "Unautorised HTTP, Token not provided"}) ;
  }
  //assuming token is in the format "bearer <jwtToken> , removing the "Bearer" prefix "
  const jwtToken = token.replace("Bearer" , "").trim() ;
  console.log("token from auth middleware" , jwtToken);
  try {
    const isVerfied = jwt.verify(jwtToken , process.env.JWT_SELECT_KEY);

    const userData = await User.findOne({ email: isVerfied.email }).
    select({
        password : 0,
    }) ;
    console.log(userData);

    req.user = userData ;
    req.token = token ;
    req.userID = userData._id ;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token"});
  }
};

module.exports = authmiddleware ; 