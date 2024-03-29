const express = require("express")
const router= express.Router()
const {getUser,addUser,updateUser,deleteUser}=require("../controllers/userControllers")

router.get("/",getUser)
router.post("/post",addUser)
router.put("/put/:id",updateUser)
router.delete("/delete/:id, deleteUser")

module.exports= router