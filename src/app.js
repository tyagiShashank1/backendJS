import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser' //to access user's broswer cookies and perform crud operations


const app = express()

//Express Middlewares

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials: true
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//Routes import
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users", userRouter);

//http://localhost:3000/ap1/v1.users/register


export { app }