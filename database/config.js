const mongoose = require("mongoose");

async function connectDB(){
console.log("trying tp connecct");
const url = "mongodb://localhost:27017/newsapi";
await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
  console.log(err ? "error" : "connected")
});
//await mongoose.connection.on , ()=> console.log("connected"));

}

module.exports = connectDB;