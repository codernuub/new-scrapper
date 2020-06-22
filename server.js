const express = require('express');
const app = express();
const connectDB = require('./database/config');
const db = require('./database/database');
const scrap = require('./scrapper');

connectDB()
.then(()=> scrap())
.catch(()=>console.log("error"));

setInterval(()=>scrap(),(5 * 60 * 1000));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
})

app.get('/education', db.getData);
app.listen(3001);