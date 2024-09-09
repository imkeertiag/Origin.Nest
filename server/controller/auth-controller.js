const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome to world of routers");
    } catch (error) {
        console.log(error);
    }
}

// _____________________

// User Registration Logic
// _____________________
const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }
        // const salt = 10;
        // const hashedPassword = await bcrypt.hash(password , salt);  
        // const usercreated = await User.create({ username , email , phone , password:hashedPassword}) ;
        const usercreated = await User.create({ username, email, phone, password });

        //jwt
        res.status(201).json({
            msg: "registration successful",
            token: await usercreated.generateToken(),
            userId: usercreated._id.toString(),
        });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

// _____________________

// User Login Logic
// _____________________
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credential" });
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ msg: "Invalid email or password" });
            } else {
                //generate jwt tokens
                res.status(201).json({
                    msg: "Login successful",
                    token: await user.generateToken(),
                    userId: user._id.toString(),
                });
            }
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

// user logic --> to send user data
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
};

module.exports = { home, register, login, user };
