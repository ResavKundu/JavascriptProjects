const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt = require('bcrypt');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
})
//compare password
userSchema.methods.comparePassword=async function(password){
    const retult=  await bcrypt.compare(password,this.password);
   return retult;
   
};

// json web token
userSchema.methods.generateToken= async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        
        // process.env.JWT_SECRET_KEY
        'RESAV',{
            expiresIn:"30d",
        }
    );
    } catch (error) {
        console.error(error);
    }
};

// password
userSchema.pre('save',async function(){
    // console.log(this);
    const user=this;
    if(!user.isModified('password')){
        next();
    }
    try {
        const saltRound=await bcrypt.genSalt(10);
       const has_password=await bcrypt.hash(user.password,saltRound);
       user.password=has_password;
    } catch (error) {
        next(error);
    }
})
const User=new mongoose.model("User",userSchema);
module.exports=User;