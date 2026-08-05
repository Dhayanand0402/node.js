const mongoose = require("mongoose");

async function main() {
    try {
        // Connect to MongoDB
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        console.log("Connected to MongoDB");

        // Create Schema
        const schema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                match: /.+\@.+\..+/
            }
        });

        // Create Model
        const Model = mongoose.model("Test", schema);

        // Create Document
        const data = new Model({
            name: "John",
            email: "john@example.com"
        });

        // Save Document
        await data.save();
        console.log("Data Saved Successfully");

    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

// Call the main function
main();