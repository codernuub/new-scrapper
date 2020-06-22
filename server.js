const express = require("express");
const app = express();
const db = require("./database/database");
const connectDB = require("./database/config");
const scrap = require("./scrapper");

const PORT = parseInt(process.env.PORT) || 3001;

(async () => {
  try {
    await connectDB();
    scrap();
  } catch (e) {
    console.log(e.message);
  }

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/education", db.getData);

  app.listen(PORT, () => console.log(`Listning on http://localhost:${PORT}`));
})();
