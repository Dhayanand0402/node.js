const Student = require('./Student'); 

// Update 
Student.updateOne( 
    { name: "John" }, 
    { age: 22 } 
).then(() => console.log("Updated")); 

// Delete 
Student.deleteOne( 
    { name: "John" } 
).then(() => console.log("Deleted"));