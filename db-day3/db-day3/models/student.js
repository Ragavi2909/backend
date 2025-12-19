const mongoose = require("mongoose"); // import mongoose

const studentSchema = new mongoose.Schema({ //new -create 
    id: {
        type: Number,
        required: true,
        unique: true // should be unique
    },
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("Student", studentSchema);
