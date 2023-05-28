const path = require("path")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const User  = require("../models/userModel")
const Resume = require("../models/resumeModel")
const { sendToken } = require("../utils/sendtoken")
const { sendmailotp } = require("../utils/sendmailotp")
const ErrorHandler = require("../utils/ErrorHandler")
const imagekit = require("../utils/imagekit").initImageKit()


exports.homepage = (req,res,next) => {
    res.json({message :" this is homepage"})
}

exports.currentUser = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.id).populate("resumes").exec();
    res.status(200).json({success:true, user})
   })


exports.createuser = catchAsyncErrors(async (req,res,next) => {
 const user = await new User(req.body).save();
 sendToken(user,res,201)
})


exports.signinuser = catchAsyncErrors(async (req,res,next) => {
    const user = await  User.findOne({email:req.body.email}).select("+password").exec()
    if(!user) return next(new ErrorHandler("User not Found",404))

    const isMatch = user.comparepassword(req.body.password);
    if(!isMatch) return res.status(500).json({message:"Wrong Credentials"})
    sendToken(user,res,200)
})


exports.signoutuser = catchAsyncErrors(async (req,res,next) =>{
    res.clearCookie("token");
    res.status(200).json({ message: "Successfully Logged Out!" });
})


exports.sendmail = catchAsyncErrors(async (req,res,next) =>{
    const user = await User.findOne({email:req.body.email}).exec();
    if(!user) return next(new ErrorHandler("User not found"),404);
    sendmailotp(user,res);
})


exports.verifyotp = catchAsyncErrors(async (req,res,next) => {
 const user = await User.findOne({email:req.body.email}).select("+password").exec()

 if(user.otp == req.body.otp){
     user.password = req.body.password;
     user.otp = "";
     await user.save()
     res.status(200).json({
        success: true,
        message: "Password Changed Successfully",
    });
 } else {
    return next(new ErrorHandler("Invalid OTP", 500));
}
})



exports.resetpassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id).select("+password").exec();
    if (!user) return next(new ErrorHandler("User not found", 404));

    const isMatch = user.comparepassword(req.body.oldpassword);
    if (!isMatch) return next(new ErrorHandler("Wrong Credientials", 500));

    user.password = req.body.newpassword;
    await user.save();

    sendToken(user, res, 200);
});


exports.updateuser = catchAsyncErrors(async (req, res, next) => {
    await User.findByIdAndUpdate(req.params.id, req.body).exec();
    res.status(200).json({
        success: true,
        message: "User Successfully Updated",
    });
});


exports.updateavatar = catchAsyncErrors(async (req,res,next) =>{
    console.log("body >>>>", req.body);
    console.log("files >>>>", req.files);
    const user = await User.findById(req.params.id)
    const file = req.files.avatar;
    const modifiedName = `resumebuilder-${Date.now()}${path.extname(file.name)}`

    if(user.avatar.fileId !== ""){
        await imagekit.deleteFile(user.avatar.fileId);
    }

    const { fileId, url } = await imagekit.upload({
        file: file.data,
        fileName: modifiedName
    });
    user.avatar = { fileId, url };
    await user.save();
    res.status(200).json({ success: true, message: "Profile Updated"});
})


exports.createresume = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id).exec();
    const newresume = new Resume(req.body);
    newresume.profileinfo = user._id;
    user.resumes.push(newresume._id);
    await newresume.save();
    await user.save();
    res.status(200).json({ success: true, message: "Resume created!" });
});


exports.readresumes = catchAsyncErrors(async (req, res, next) => {
    const resumes = await Resume.find().populate("profileinfo").exec();
    res.status(200).json({ success: true, resumes });
});

