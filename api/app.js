require("dotenv").config({path:"./.env"})
const { urlencoded } = require("express")
const express = require('express')
const app = express()
const PORT = process.env.PORT


//database Connectivity
require("./models/database").getconnection();



//morgan
const logger = require('morgan')
app.use(logger("tiny"))

//bodyparse
app.use(express.json())
app.use(urlencoded({extended:false}))


//expresssession
const session = require("express-session")
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:process.env.EXPRESSSESSION,
 })
);

//cookie-parser
const cookieParser = require("cookie-parser")
app.use(cookieParser())

// cors
app.use(require("cors")({ credentials: true, origin: true }));


//express fileupload
const fileUpload = require("express-fileupload")
app.use(fileUpload());

//routes
const indexRouter = require("./routes/indexRouter")
app.use('/',indexRouter)


//error Handling
const ErrorHandler = require('./utils/ErrorHandler')
const { createErrors } = require('./middleware/errors')
app.all("*",(req,res,next)=>{
    next(new ErrorHandler(`requested URL ${req.path} not found`,404));
})
app.use(createErrors)




app.listen(
    PORT,
    console.log(`Server is Connected to ${PORT}`)
)