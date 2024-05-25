import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () =>{  //this fucntion will also return a promise

try {
  const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //will returna promise
  
  console.log(`\n Mongo DB connected !! DB Host: ${connectionInstance.connection.host}`)

} catch (error) {
  console.log("Mongo DB connection Error: ", error);
  process.exit(1) // process is reference to a process thorugh which current application is running with

}
  

}

export default connectDB;