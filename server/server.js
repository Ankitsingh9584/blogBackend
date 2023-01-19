const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const connect=require("./config/db");
const PORT=process.env.PORT || 8080
// routes
const userRegister=require("./routes/user")
const blog=require("./routes/blog");
const googleAuth=require("./routes/googleAuth")
const comment=require("./routes/comment")
const forgotPass=require("./routes/forgotpass");
app.use("/user",userRegister)
app.use("/blog",blog)
app.use("/auth",googleAuth);
app.use("/",comment)
app.use("/",forgotPass)
app.listen(PORT,async()=>{
await connect();
})