const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("college");
        const students = db.collection("students");

        await students.deleteMany({});
        await students.insertMany([
            { name: "Arun", age: 20, marks: 85, city: "Chennai" },
            { name: "Priya", age: 20, marks: 92, city: "Madurai" },
            { name: "Kumar", age: 68, marks: 68, city: "Chennai" },
            { name: "Divya", age: 21, marks: 75, city: "Coimbatore" },
            { name: "Ravi", age: 23, marks: 88, city: "Madurai" }
        ]);

        console.log("\nStudents with mark > 80");
        console.log(
            await students.find({
                marks: { $gt: 80 }
            }).toArray()
        );

        console.log("\nStudents with age >= 21");
        console.log(
            await students.find({
                age: { $gte: 21 }
            }).toArray()
        );

        console.log("\nStudents with marks between 70 to 90");
        console.log(
            await students.find({
                marks: { $gte: 70, $lte: 90 }
            }).toArray()
        );

        console.log("\nStudents from Chennai to Madurai");
        console.log(
            await students.find({
                city: { $in: ["Chennai", "Madurai"] }
            }).toArray()
        );

        console.log("\nAge >= 20 AND marks >80:");
        console.log(
            await students.find({
                $and: [
                    { age: { $gte: 20 } },
                    { marks: { $gt: 80 } }
                ]
            }).toArray()
        );

        console.log("\nChennai OR marks > 90:");
        console.log(
            await students.find({
                $or: [
                    { city: "Chennai" },
                    { marks: { $gt: 90 } }
                ]
            }).toArray()
        );
    } catch (error) {
        console.log("Error: ", error);
    } finally {
        await client.close();
    }
}

main();