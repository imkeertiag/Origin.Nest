require("dotenv").config(); //->dotenv to mongo
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router") ;
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/database");
const errorMiddleware = require("./middlewares/error-middleware") ;

//handling cors policy
const corsOptions = {
  origin: `${process.env.FRONTENDURL}`,
  methods: "GET, POST, PUT,  DELETE, PATCH, HEAD",
  allowedheaders: ["Content-Type" , "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

//for postman
app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/form" , contactRoute);
app.use("/api/data" , serviceRoute);

app.use(errorMiddleware) ;
// app.get("/" , (req , res) =>{
//     res.status(200).send("Welcome");
// })

// app.get("/register" , (req , res) =>{
//     res.status(200).send("Welcome to register");
// })

const PORT = 5000;
// app.listen(PORT , () =>{
//     console.log(`Server is running on port ${PORT}`);
// });
connectDb().then(() =>{
    app.listen(PORT , () =>{
        console.log(`Server is running on port ${PORT}`);
    });
});