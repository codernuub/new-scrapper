const mongoose = require("mongoose");

async function connectDB(){
const url = "mongodb+srv://abdullah:abdullah420@cluster0-wli1l.mongodb.net/NewsDatabase?retryWrites=true&w=majority";
await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
  console.log(err ? "error" : "connected")
});


}

module.exports = connectDB;