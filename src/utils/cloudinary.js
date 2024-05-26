import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


// Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View Credentials' below to copy your API secret
});


//METHOD
const uploadOnCloudinary = async (localFilePath) =>{
try {
  if(!localFilePath) return null;
 const response = await cloudinary.uploader.upload(localFilePath,{
    resource_type:"auto"
  })
  //file has been successfully uploaded
  console.log("File has successfully been uploaded on cloudinary ", response.url);
  return response;

} 
catch (error) {
  
  fs.unlink(localFilePath) //remove the locally saved temporary file as the upload operation got failed
  return null;
}
}

export {uploadOnCloudinary}
