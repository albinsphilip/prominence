const express=require('express');
const mongoose=require('mongoose');
const app=express();
const PORT=process.env.PORT||8080;//change this

//connecting to DB
mongoose.connect('mongodb://localhost/prominence',{useNewUrlParser:true,useUnifiedTopology:true,});//change this
//define DB schema and models
//define API routes

app.listen(PORT,()=>{console.log('Server is running on port ${PORT}');});
