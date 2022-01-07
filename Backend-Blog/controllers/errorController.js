exports.centralErrorHandler=(err,req,res,next,)=>{
    res.json({message:"error occured",data:err.message})
}