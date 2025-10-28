import mongoose from "mongoose";
const url="mongodb://localhost:27017/ChitoHelp";
mongoose.connect(url)
.then(()=>console.log("connected"))
.catch(err=>console.error(err))

// defining the collection
const users=new mongoose.Schema({
  name:{
    type:String,
    required:true,

  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  }
}
);
const User=mongoose.model("users",users);
export default User;
