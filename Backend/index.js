import express from "express";
import User from './config.js'
const app=express();
app.use(express.json());
//creating account:
app.post('/adduser',async(req,res)=>{
    try {
         const user=new User(req.body);
         const new_user=await user.save();
         res.send("Send successfully");
    } catch (error) {
        res.send(404);
        res.send("Error In Sending data to dtabase")
        
    }
    
});
app.post("/login",async(req,res)=>
{
    const {email,password}=req.body;
    const user=await User.findOne({email})
    if(!user)
    {
        res.send("Emai not exist")
    }
    else{
        if(password==user.password)
        {
            res.send("Login Successsfully");
        }
        else{
            res.send("Login Credintainls Not matcehd");
            console.log(user.password);
        }

    }


})
app.listen(3001,()=>console.log("Server runnig"));