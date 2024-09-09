const express = require("express");
const router = express.Router();
// const {home} = require("../controller/auth-controller");
const authcontrollers = require("../controller/auth-controller");
const { signupSchema , loginschema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware") ;
const authmiddleware = require("../middlewares/auth-middleware") ;
// const { sign } = require("jsonwebtoken");

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to world of routers");
// });

router.route("/").get(authcontrollers.home);
router.route("/register").post( validate(signupSchema), authcontrollers.register);
router.route("/login").post( validate(loginschema), authcontrollers.login);
router.route("/user").get(authmiddleware , authcontrollers.user);


// router.route("/register").get((req, res) => {
//     res.status(200).send("Welcome to world of routers");
// });

module.exports = router;