const User = require('../models/User');


exports.getAllUser =async (req,res)=>{
    try{

    const data = await User.find({});
    
    if(!data){
        res.status(404).json({
            success : false,
            message : "Data not Found"
        });
    }

    res.status(200).json({
        success : true,
        data : data,
        message:"Data is found",
    })
    }catch{
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        }) }


}