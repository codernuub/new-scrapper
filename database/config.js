const mongoose = require("mongoose");
async function connectDB(){
const url = "mongodb://localhost:27017/newsapi";
await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
  console.log(err ? "error" : "connected");
});
}
module.exports = connectDB;