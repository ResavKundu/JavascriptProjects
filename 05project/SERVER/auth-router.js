const express=require("express");
const router=express.Router();
const {register,login}=require('./auth-controller');


router.get("/",(req,res)=>{
    res.status(200).send("Welcome To Home Page!!");
});
router.route("/register").
       post(register);

router.route("/login")
      .post(login);

module.exports=router;