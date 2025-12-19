const express= require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('welcome to day1!');
});
app.post("/students",(req,res)=>{
    const student=req.body;
    res.json({
        message:"Student data received successfully",
        data:student
    });
});
app.listen(3000,()=>{
    console.groupCollapsed("Server is running on port 3000");
});