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
//Using express.json() middleware is essential for handling JSON data in your Express application. Without this middleware, the incoming JSON data would not be parsed, and you wouldn't be able to access it via req.body. This is particularly important for APIs and web applications that interact with clients sending JSON payloads.
app.use(express.urlencoded({extended:true, limit:"16kb"}))
//Without this middleware, the incoming URL-encoded data would not be parsed, and you wouldn't be able to access it via req.body. This is particularly important for web applications that use forms to collect data from users.
app.use(express.static("public"))
//It is used to serve static files from a specified directory. When you use this middleware, Express automatically handles the requests for files within the specified directory and serves them to the client.
app.use(cookieParser())
//To access user's broswer cookies and perform crud operations


export { app }