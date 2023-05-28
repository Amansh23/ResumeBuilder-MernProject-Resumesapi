const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userModel = new mongoose.Schema(
    {
        name :{
            type:String,
            minLength: [4,"Name must have atleast 4 characters"],
            required :[true,"Name is required"]
        },
        email:{
            type:String,
            unique:true,
            required :[true,"Email  is required"],
            match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
        },
        password :{
            type :String,
            select : false,
            required:[true,"Password is required"],
            minLength :[8,"minimum 8 letter is required"],
            match:[/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number or special character is required"],
        },
        contact:{
            type:String,
            minLength:[10,"Contact must have 10 characters"],
            maxLength:[10,"Contact must have atleast 10 character"],
            required:[true,"Contact is required"]
        },
        avatar:{
            type:Object,
            default:{
                fileId:"",
                url:"https://plus.unsplash.com/premium_photo-1663133959589-cd80a01059f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
            },
        },
        links: {
            type: Object,
            default: {
                linkedin: "",
                github: "",
                behance: "",
            },
        },
        resumes: [{ type: mongoose.Schema.Types.ObjectId, ref: "resume" }],
        otp:String,        

    },
    {timestamps : true}
)


userModel.pre("save",function(){
    if(!this.isModified("password")){
        return
    }
    let  salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password,salt)
})

userModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password,this.password);
}


userModel.methods.jwttoken = function(){
    return jwt.sign({id:this._id},process.env.JWTSECRET,{expiresIn : process.env.TOKENEXPIRETIME})
}

const User = mongoose.model("user",userModel)
module.exports = User;

