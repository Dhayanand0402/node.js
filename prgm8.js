const mongoose = require('mongoose');
const Student = require('./Student'); 

const main = async () => {
    try {
        await mongoose.connect("mongodb://1270.0.01.27017/studentDB");
        console.log("MongoDB Connected");
    
    // Update 
    const updateResult = await Student.updateOne( 
        { name: "John" }, 
        { age: 22 } 
    );
    console.log("Updated:", updateResult);

    // Delete 
    const deleteResult = await Student.deleteOne( 
        { name: "John" } 
    );
    console.log("Deleted:", deleteResult);
    
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await mongoose.connection.close();
    }
};
main();

//npm i mongoose
//node [filename]
//after the connection is established, the update and delete operations will be performed on the Student collection in the MongoDB database in CMD
//mongosh 
//show dbs
//use studentDB
//db.createCollection("students")
//db.students.find()