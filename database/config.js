const mongoose = require("mongoose");

function connectDB(){

const url = "mongodb://localhost:27017/newsapi";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('connection' , ()=> console.log("coonnected to database"));

}

module.exports = connectDB;