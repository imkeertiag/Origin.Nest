const { z } = require("zod");

//creating an object schema
const signupSchema = z.object({
    username: z.string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not more than 255 characters" }),
    email: z.string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" })
    .min(3,{ message: "Email must be at least 3 characters" })
    .max(255,{ message: "Email must not be more than 255"}),
    phone: z.string({ required_error: "Phone is required" })
    .trim()
    .min(10 , { message: "Phone number must be of 10 digits"})
    .max(20 , { message: "Phone number must be of 20 digits"}),
    password: z.string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(25, { message: "Password must not be more than 25 characters" }),
});


const loginschema = z.object({
    email: z.string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" })
    .min(3,{ message: "Email must be at least 3 characters" })
    .max(255,{ message: "Email must not be more than 255"}),
    password: z.string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(25, { message: "Password must not be more than 25 characters" }),
});


module.exports = {signupSchema, loginschema};