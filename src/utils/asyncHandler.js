const asyncHandler = (requesthandler) => {

return async (req,res,next) =>{
  try {
    await requesthandler(req,res,next);
  } 
  catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message:err.message
    })
    next(error);
  }
}
}


export {asyncHandler}