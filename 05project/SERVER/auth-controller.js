const User=require('./models/user-model');
const bcrypt=require("bcryptjs");

const register=async (req,res)=>{
    try {
       console.log(req.body);
       const{username,email,phone,password}=req.body;

       const userExist=await User.findOne({email});
       if(userExist){
        return res.status(400).json({msg:"Email Already exits"});
       }
    //    const saltRound=10;
    //    const has_password=await bcrypt.hash(password,saltRound);
      const userCreated= await User.create({username,email,phone,password});
        res.status(200).json({msg: userCreated});

    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
};

const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message:"Invalid Credentails"});
        }
        const user= await userExist.comparePassword(password);
        //user=true;
        console.log(user);
        if(user){
            res.status(200).json({
                msg:"Login Successful",
                token: await userExist.generateToken(),
                userId:userExist._id.toString(),
            });
        }else{
             res.status(401).json({message: "Invalid email or password"});
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={register,login};