
import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link} from "react-router-dom";
import { async_signin } from "../store/Actions/userActions";
import { toast } from "react-toastify";
import validator from "validator"

const Signin = () => {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    const { isAuthenticated ,errors} = useSelector((state) => state.userReducer);

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    useEffect(() => {
        console.log(isAuthenticated)
        isAuthenticated && navigate("/profile");
    }, [isAuthenticated,errors]);


    // if(errors ){
    //     toast(errors)
    // }


    
    const SubmitHandler = (e) =>{
        e.preventDefault();
        
        if(validator.isEmail(Email)) {
            dispatch(async_signin({
                email:Email,
                password:Password,
            }))
            setEmail("")
            setPassword("")
            
        }else{
            toast("Please Enter a Valid Email")
        }

        if (errors.length){
            toast.error(errors);
        }
    
        setEmail("")
        setPassword("")
    }

   

    const signuppage = {
        width:"100vmax",
        height:"45vmax",
        display:"flex",
        background:"linear-gradient(to bottom, #FFC003 20%,Transparent 30%,white 50%,white 100%)",

        
    }

    const left = {
        width:"50vmax",
        minHeight:"45vmax",
        backgroundColor:"#FFC003",
        borderBottomRightRadius:"7vmax",
        position:"relative"
    }

    const right = {
        width:"50vmax",
        minHeight:"45vmax",
        backgroundColor:"white",
        borderTopLeftRadius:"7vmax",
        position:"relative",
    }

    const signinbox = {
        width:"25vmax",
        minHeight:"18vmax",
        // backgroundColor:"red",
        borderRadius:"1vmax",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        padding:"2vmax",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }

    const signinfont = {
        fontSize:"25px",
        fontFamily:"gilroy SemiBold",
        color:"#FFC003"
    }

    const input = {
        width:"100%",
        height:"2vmax",
        fontSize:"15px",
        fontFamily:"gilroy SemiBold",
        border:"none",
        borderRadius:"10px",
        marginTop:"20px",
        padding:"1vmax 0.5vmax",
        borderBottom:"1px solid grey",
        outline:"none"
    }

    const forgetstyle = {
        textDecoration:"none",
        fontFamily:"gilroy SemiBold",
        fontSize:"15px",
        marginLeft:"40px"
    }

    const headbox = {
        padding:"2vmax",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }

    const circle = {
        width:"12vmax",
        height:"12vmax",
        borderRadius:"50%",
        backgroundColor:"white",
        backgroundImage:'url("https://i.pinimg.com/736x/50/29/bf/5029bfeb6a296822196f0ef3489721cc.jpg")',
        backgroundPosition:"center",
        backgroundSize:"cover"

    }

    const heading = {
        fontFamily:"Gilroy SemiBold",
        fontSize:"40px",
        color:"Black",
        marginTop:"3vmax"
    }

    const headboxpara = {
        fontFamily:"Gilroy SemiBold",
        fontSize:"20px",
        color:"Black",
        marginTop:"1vmax"
    }

    const icon = {
        width:"4vmax",
        height:"4vmax",
        backgroundColor:"black",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"1vmax",
        marginTop:"3vmax"
    }
    const iconstyle = {
        textDecoration:"none",
        color:"white",
        fontSize:"30px"
    }

    return (
        <div style={signuppage}>
            <div style={left}>
                <div style={headbox}>
                <div style={circle}></div>
                <h1 style={heading}>Let's get you signin</h1>
                <p style={headboxpara}> It should only take a couple of minutes <br /> <span style={{marginLeft:"60px"}}>to pair with your watch</span></p>
                <div style={icon}>
                <Link style={iconstyle} to="/"> <i class="ri-arrow-left-s-line"></i> </Link>
                </div>
                </div>
            </div>
            <div style={right}>
                <div style={signinbox}>
                <form onSubmit={SubmitHandler}>
                   <h2 style={signinfont}>SignIn</h2>
                    <input
                    style={input}
                    type="text"
                    placeholder="Email@mail.com"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    
                    <input
                    style={input}
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    />
                    <button className="btn3">Signin</button>
                    <Link style={forgetstyle} to="/sendmail">Forget Password?</Link>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;