const express = require('express');
const data = require('./data.json');
var bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


app.get("/surveydata",(req,res)=>{
    res.send(data);
});
app.listen(5000,()=>{
    console.log("bkl");
});
