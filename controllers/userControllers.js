const User= require("../models/userSchema")

//@POST METHOD
const addUser= async(req,res)=>{

    try{
        const newUser =new User(req.body)
        await newUser.save()
        res.status(200).json({msg:"user Added, newUser"})
    }
    catch (err){
        res.status(500).json({msg:err.message})
    }
}
//@GET METHOD
const getUser= async(req,res)=>{
    try{
        const newUser =await User.find()
        res.status(200).json({msg:"get all the users",newUser})
    }
    catch (err){
        res.status(500).json({msg:err.message})
    }

}
//@UPDATE METHOD
const updateUser= async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            {_id:req.parms.id},{...req.body}
            )
        if(!User) 
            return res.status(404).json({msg:"user not found"})
        res.status(200).json({msg:"user Updated successfully",User})
    }
    catch (err){
        res.status(500).json({msg:err.message})
    }
}

//@DELETE METHOD
const deleteUser= async(req,res)=>{
    try{
        const removeUser = await User.findByIdAndDelete(req.parms.id)
        if(!removeUser) return res.status(404).json({msg:"user not found"})
        res.status(200).json({msg:"user deleted successfully",User:removeUser})
    }
    catch (err){
        res.status(500).json({msg:err.message})
    }
}

module.exports= {addUser,getUser,updateUser,deleteUser}