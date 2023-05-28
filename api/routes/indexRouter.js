const express = require("express")
const router = express.Router()
const { 
    homepage ,
    createuser,
    signinuser,
    signoutuser,
    sendmail,
    verifyotp,
    resetpassword,
    updateuser,
    updateavatar,
    createresume,
    readresumes,
    currentUser
} = require("../controllers/indexController")
const { isAuthorizedUser } = require('../middleware/auth')



router.get('/',isAuthorizedUser,homepage)

//@api- post/me
router.post("/me",isAuthorizedUser,currentUser)

//post route
router.post('/signup' , createuser);

//post route
router.post('/signin' , signinuser);

//signout
router.get("/signout", signoutuser);

//post/send-mail
router.post("/send-mail",sendmail)

//post/verifyotp
router.post("/verify-otp",verifyotp);

// @api - post /reset-password/:id
router.post("/reset-password/:id", isAuthorizedUser, resetpassword);

// @api - post /update-user/:id
router.post("/update-user/:id", isAuthorizedUser, updateuser);

// @api - post /update-user/:id
router.post("/avatar/:id", isAuthorizedUser, updateavatar);



// --------------------------------------------------------------------



// @api - post /resume/create/:userid
router.post("/resume/create/:id", isAuthorizedUser, createresume);

// @api - post /resume/readall/:userid
router.post("/resume/readall/", isAuthorizedUser, readresumes);





module.exports = router;