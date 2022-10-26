const mongoose=require("mongoose");
const express= require("express");
const ejs=require("ejs");
const app=express();
app.set("view engine","ejs"); //can read ejs format
async function connect(){
    mongoose.connect("mongodb+srv://HarryPotter:harry123@cluster0.swtaux6.mongodb.net/HarryPotterQuiz?retryWrites=true&w=majority")
    .then(()=>{console.log("Connected")})
    .catch(err=>{console.log(err)});
}

const QuesSchema = new mongoose.Schema({
    Q1: {
      type: String,
      required: true,
    },
    a: {
      type: String,
    },
    b: {
        type: String,
      },
      c: {
        type: String,
      },
      d: {
        type: String,
      },
  });
  
const Ques = mongoose.model("Questions", QuesSchema);
connect();
app.get("/",async (req,res)=>{
    const questions=await Ques.find();
    res.render("quiz",{questions:questions});
})
app.listen(8000,()=>console.log("Server Running on port 8000..."));
