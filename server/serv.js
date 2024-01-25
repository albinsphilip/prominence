const mongoose=require('mongoose');

const express = require('express');
const app=express();
const PORT=process.env.PORT||8080;//change this
app.use(express.json());
//connecting to DB
//mongoose.connect('mongodb://localhost/prominence',{useNewUrlParser:true,useUnifiedTopology:true,});//change this
//define DB schema and models
//define API routes

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`);});