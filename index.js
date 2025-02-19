const express = require('express');
const app = express();
const user = require('./routes/user');
require('dotenv').config();
//port 
const PORT = process.env.PORT || 4000;
//parser
app.use(express.json());

//database
const DBConnect = require("./config/database");
DBConnect();


//mount the route
app.use("/api",user);
app.get('/',(req,res)=>{
    res.send("This is the Home page of the api Route")
})

//listening the port

app.listen(PORT,()=>{
    console.log(`Server is running at the port ${PORT}`);
})