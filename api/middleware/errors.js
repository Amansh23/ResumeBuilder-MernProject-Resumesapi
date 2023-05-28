exports.createErrors = (err,req,res,next)=>{
    let statusCode = err.statusCode || 500;

    //TokenExpiredError
    if (err.name === "TokenExpiredError") {
        err.message = "Session timeout!";
    }

    //mongodb error
    if(
        err.name === "MongoServerError" &&
        err.message.includes("E11000 duplicate key")
    ){
        err.message = "User already Exists " + req.body.email
    }

 //forregularerror
    res.status(statusCode).json({
        message: err.message,
        errname:err.name,
        stack:err.stack
    })
} 