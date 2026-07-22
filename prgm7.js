const mongoose = require("mongoose");
const Student = require("./Student");

// Insert Student
const addStudent = async () => {
    const s = new Student({
        name: "John",
        age: 20,
        department: "CSE",
        email: "john@gmail.com"
    });

    await s.save();
    console.log("Inserted");
};

// Fetch Students
const getStudents = async () => {
    const data = await Student.find();
    console.log(data);
};

// Main Function
const run = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/studentDB");
        console.log("MongoDB Connected");

        await addStudent();
        await getStudents();
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await mongoose.connection.close();
    }
};

run();