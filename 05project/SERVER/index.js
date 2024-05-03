const express=require("express");
const cors=require("cors");
const app=express();
const router=require('./auth-router');
const connectDB=require('./DB');
const PORT=5000;

const corsOptions={
    origin: "http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth',router);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at PORT : ${PORT}`);
    });
});