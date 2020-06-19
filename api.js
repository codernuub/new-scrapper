const express = require('express');
const app = express();

const connectDB = require('./database/config');
const pup = require('./server');

//connectDB();

pup();

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
})
app.get('/education', pup);
app.listen(3001);