const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/mern_admin"

const URI = process.env.MONGODB_URI;
// const URI = "mongodb+srv://keertiagarwal2003:<db_password>@cluster0.2djtp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(URI);
// console.log("MongoDB URI:", URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("database connection failed");
        process.exit(1);
    }
};

module.exports = connectDb;