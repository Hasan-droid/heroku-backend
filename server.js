const express = require('express');
const app=express();
const cors=require('cors');
app.use(cors());
require('dotenv').config();

app.get('/',(req,res)=>{
res.json("hello world")
})
app.listen(process.env.PORT,()=>{
    console.log(`starting at port ${process.env.PORT}`)
});