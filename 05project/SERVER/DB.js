const mongoose=require("mongoose");
const URL="mongodb://127.0.0.1:27017/mernn-admin";
const connectDB=async()=>{
    try {
        await mongoose.connect(URL);
        console.log("Connected Successfully to DB");
    } catch (error) {
        console.log("Database Connected Failed");
        process.exit(0);
    }
}
module.exports=connectDB;