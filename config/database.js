const mongoose =require('mongoose');
require('dotenv').config();
///database connect

module.exports = function DBConnect (){
    mongoose.connect(process.env.DATABASE_URL).then(
        ()=>{
            console.log("Database Connected");
        }).catch((err)=>{
            console.log(err);
            console.log("Problem To connecting Database")
        });
}