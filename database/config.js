const mongoose = require("mongoose");
async function connectDB(){
const url = "";
await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
  console.log(err ? "error" : "connected");
});
}
module.exports = connectDB;
