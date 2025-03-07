const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true,
    },
    email:{
        type : String,
        required : true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    dob:{
        type : String,
        required : true,
    },
    gender:{
        type : String,
        required : true,

    },
    password :{
        type : String,
        required : true,
    }
   
})


module.exports = mongoose.model("user",userSchema);