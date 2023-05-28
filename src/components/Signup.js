import React, { useEffect , useState ,useRef} from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate ,Link} from "react-router-dom";
import { async_signup } from "../store/Actions/userActions";
import { toast } from "react-toastify";
import validator from "validator"


const Signup = () => {
    const navigate = useNavigate();
    const { isAuthenticated, errors } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Contact, setContact] = useState("")
    const [Password, setPassword] = useState("")
    const [err, seterr] = useState()
    const [errorofname, seterrorofname] = useState(false)
    const [errorofemail, seterrorofemail] = useState(false)
    const [errorofcontact, seterrorofcontact] = useState(false)
    const [errorofpassword, seterrorofpassword] = useState(false)
    const userefofname = useRef(null)
    const userefofemail = useRef(null)
    const userefofcontact = useRef(null)
    const userefofpassword = useRef(null)
    

    useEffect(() => {
        isAuthenticated && navigate("/profile");
        seterr(errors)
    }, [isAuthenticated,errors]);


    if(!errors == null){
            toast(err)
    }


    const SubmitHandler = (e) =>{
        e.preventDefault();
        toast(err)
        if(validator.isEmail(Email)) {
            dispatch(async_signup({
                name: Name,
                email:Email,
                contact:Contact,
                password:Password,
    
            }))
            setName("")
            setEmail("")
            setContact("")
            setPassword("")
            
        }else{
            toast("Email is invalid")
        }
        
    }

    const ChangeHandlerofname = (e) => {
        setName(e.target.value)
        if (userefofname.current.value.length < 4 ) {
           seterrorofname(true)
       }    
       else{
           seterrorofname(false)
       }
    }

    const ChangeHandlerofemail = (e) => {
        setEmail(e.target.value)
        if (userefofemail.current.value.length < 8 ) {
           seterrorofemail(true)
       }    
       else{
           seterrorofemail(false)
       }
    }
    const ChangeHandlerofcontact = (e) =>{
        setContact(e.target.value)
        if (userefofcontact.current.value.length < 10 ) {
            seterrorofcontact(true)
        }    
        else{
            seterrorofcontact(false)
        }
    }

    const ChangeHandlerofpassword = (e) =>{
        setPassword(e.target.value)
        if (userefofpassword.current.value.length < 9 ) {
            seterrorofpassword(true)
        }    
        else{
            seterrorofpassword(false)
        }
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

    const signupbox = {
        width:"25vmax",
        minHeight:"25vmax",
        // backgroundColor:"red",
        borderRadius:"1vmax",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        padding:"2vmax",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }

    const signupfont = {
        fontSize:"25px",
        fontFamily:"Gilroy SemiBold",
        color:"#FFC003"
    }

    const input = {
        width:"100%",
        height:"2vmax",
        fontSize:"15px",
        fontFamily:"Gilroy SemiBold",
        border:"none",
        borderRadius:"10px",
        marginTop:"20px",
        padding:"1vmax 0.5vmax",
        borderBottom:"1px solid grey",
        outline:"none"
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
        fontSize:"38px",
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

    const userefstyle = {
        fontSize:"12px",
        fontFamily:"gilroy",
        fontWeight:"700",
        marginTop:"10px",
        marginLeft:"10px",
        color:"red"
    }



    return (
        <div style={{width:"100vmax",height:"45vmax",display:"flex",background:"linear-gradient(to bottom, #FFC003 20%,Transparent 30%,white 50%,white 100%)"}} >
            <div style={left}>
            <div style={headbox}>
                <div style={circle}></div>
                <h1 style={heading}>Let's get you signup</h1>
                <p style={headboxpara}> It should only take a couple of minutes <br /> <span style={{marginLeft:"60px"}}>to pair with your watch</span></p>
                <div style={icon}>
                <Link style={iconstyle} to="/"> <i class="ri-arrow-left-s-line"></i> </Link>
                </div>
                </div>
            </div>
            <div style={right}>
                <div style={signupbox}>
                   <form onSubmit={SubmitHandler}>
                   <h2 style={signupfont}>SignUp</h2>
                    <input
                    ref={userefofname}
                    style={input}
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    value={Name}
                    onChange={ChangeHandlerofname}
                    required
                    />
                    <div style={userefstyle} >
                     { errorofname && <p>Please enter more than 3 letter's name.</p>}
                    </div>
                    <input
                    style={input}
                    ref={userefofemail}
                    type="text"
                    autoComplete="off"
                    placeholder="Email@mail.com"
                    value={Email}
                    onChange={ChangeHandlerofemail}
                    required
                    />
                    <div style={userefstyle} >
                     { errorofemail && <p>Please enter valid email</p>}
                    </div>
                    <input
                    ref={userefofcontact}
                    style={input}
                    type="text"
                    autoComplete="off"
                    placeholder="Contact at least 10digit"
                    value={Contact}
                    onChange={ChangeHandlerofcontact}
                    required
                    />
                    <div style={userefstyle} >
                     { errorofcontact && <p>Please enter 10 digit Contact</p>}
                    </div>
                    <input
                    ref={userefofpassword}
                    style={input}
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={Password}
                    onChange={ChangeHandlerofpassword}
                    required
                    />
                     <div style={userefstyle} >
                     { errorofpassword && <p>Please enter strong password .e.g- Aa@123456</p>}
                    </div>
                    <button className="btn3">Signup</button>
                   </form>
                </div>
            </div>
        </div>
    )
};

export default Signup;