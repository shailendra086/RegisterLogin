const mongoose =require('mongoose');
require('dotenv').config();
///database connect

module.exports = function DBConnect (){
    mongoose.connect(process.env.DATABASE_URL,{
         useNewUrlParser: true, useUnifiedTopology: true }).then(
        ()=>{
            console.log("Database Connected");
        }).catch((err)=>{
            console.log(err);
            console.log("Problem To connecting Database")
        });
}