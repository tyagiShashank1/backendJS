import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async(req,res)=>{
  
  try{
   
  res.status(200).json({
    message:"OK",
    success: true
  })
}
catch(error){
console.log("Error mil gaya bhaiya ",error);
}
})

export {registerUser}