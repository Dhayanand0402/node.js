const express = require("express");
const app = express();
app.use(express.json());
const students = [
    {id: 1,name:"Arun", department:"CSE"},
    {id: 2,name:"Bala", department:"IT"},
    {id: 3,name:"chandru",department:"ECE"},
    {id: 4,name:"dinesh",department:"IT"},
    {id: 5,name:"Ezhil",deprtment:"ECE"},
    {id: 6,name:"Faisal",department:"CSE"},
    {id: 7,name:"Gopal",department:"IT"},
    {id: 8,name:"Hari",department:"ECE"},
    {id: 9,name:"Imran",department:"CSE"},
    {id: 10,name:"jagan",department:"CSE"}
    
];
app.get("/students",(req, res)=>{
    const page = parseint(req.query.page) || 1;
    const limit = parseint(req.query.limit) || 3;
    const starIndex = (page - 1)*limit;
    const result = students.slice(starIndex, endIndex);
    const totalpages = Math.ceil(students.length / limit);
    res.json({
        page:page,
        limit:limit,
        totalRecords: students.length,
        totalpages:totalpages,
        students:result
    });
});
app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});