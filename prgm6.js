const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    department: String,
    email: {
        type: String,
        unique: true
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

console.log("Student model created successfully.");