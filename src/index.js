// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({path: './env'})
connectDB()
.then(()=>{  //IF DB CONNECTION IS SUCCESSFUL, THEN DO THIS
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`App is listening to PORT ${process.env.PORT} `)
  })
})
.catch((err)=>{ //IF DB CONNECTION IS FAILED, DO THIS
  console.log("Mongo DB connection failed: ", err);
})































/*
import express from 'express'
const app = express();

//IIFE fucntion
;( async()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    app.on("error",(error)=>{
      console.log("ERROR ", error);
      throw error
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`App is listening to PORT ${process.env.PORT}`)
    })


  } catch (error) {
    console.log("ERROR ", error)
    throw error
  }
})()


mongoose.connect('mongodb+srv://shashanktyagi1:877trhzzy37qhXbZ@cluster0.7ky2vxj.mongodb.net')
  .then(() => console.log('Connected!'));
  */