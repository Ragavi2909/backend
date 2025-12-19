const mongoose = require("mongoose"); // import mongoose

const connectDB = async () => { //mongoose.url is used to connect the url or string
    try {
        await mongoose.connect("mongodb://localhost:27017/collegeDB"); //2704 is default port number
        console.log("MongoDB connected to collegeDB"); //collegeDB is database name
    } catch (error) {
        console.error("MongoDB connection failed", error); //error log in the console 
        process.exit(1);
    }
};

module.exports = connectDB;
