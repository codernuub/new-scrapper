const mongoose = require("mongoose");

async function connectDB() {
  console.log("Connecting to db");
  const url = "mongodb://localhost:27017/newsapi";
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err ? "error connecting to db" : "connected to db");
  });
}

module.exports = connectDB;
