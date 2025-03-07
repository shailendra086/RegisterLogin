const bcrypt = require('bcrypt');
const User = require('../models/User')
require("dotenv").config();


//signup Route Handler
exports.signup = async(req,res)=>{
    try{
        //get data

        const {name , email,phone ,dob, gender,password } = req.body;
        //check if user already exist 
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success : false,
                message : 'User already Exists'
            });

        }

        //secure Password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }catch(err){
            return res.status(500).json({
                success : false ,
                message : "Error in Hashing password",
            })
        }

        //create entry of user
        const user = await User.create({
            name,email,phone,dob ,gender ,password : hashedPassword,
        })
        return res.status(200).json({
            success : true,
            data : user,
            message:"User Created Succesfully"
        })
        
    }catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"User Can not be register please try again"
        })
    }
}



//login handle

exports.login = async (req,res)=>{
    try{

        //data fetch
        const {email , password} = req.body;

        //validation email
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "Please fill all the details "
            });
        }

        let user = await User.findOne({email}).lean();
        //if not registerd user
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user is not registerad",
            })
        }
       
        //verify password and generate jwt token
        if(await bcrypt.compare(password,user.password)){
            //password match 
            
            res.status(200).json({
                success : true,
                user,
                message:'User Logged in Successfully'
            });
        }else
            return res.status(403).json({
                success:false,
                message:'Password Incorrect'
            })
        }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Login Error occured"
        })

    }
}