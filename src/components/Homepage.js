import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../components/Images/BackgroundImage.avif"



const Homepage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.userReducer);

    useEffect(() => {
        isAuthenticated && navigate("/profile");

    }, [isAuthenticated]);

    const SignupHandler = () =>{
        navigate("/signup");
    }

    const SigninHandler = () =>{
        navigate("/signin");
    }

    const box1 = {
        width:"100vmax",
        height:"100vh",
        backgroundImage:`url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        position:"relative",
      }
      
      const welcomebox = {
      //  backgroundColor:"red",
        position:"absolute",
        top:"25%",
        left:"10%",
        transform: "trasnlate(-50,-50)",
      }
      
      const font = {
        fontSize:"20px",
        fontFamily:"Gilroy SemiBold",
        color:"white",
        marginTop:"20px",

      }
      const font1 = {
        fontSize:"30px",
        fontFamily:"Gilroy SemiBold",
        color:"white",
        marginTop:"20px",
      }
      
      const font2 = {
        fontSize:"20px",
        fontFamily:"Gilroy SemiBold",
        color:"white",
        marginTop:"20px",
      }

    return (
    <div style={box1}>
    <div style={welcomebox}>
           <h1 style={font}> Welcome .</h1>
           <h2 style={font2}> We help you to show the World <br /> What u're Capable Of  </h2>
           <h1 style={font1}> RESUME_BUILDER </h1>
           <div style={{marginTop:"40px"}}>
           <button  onClick={SignupHandler} className="btn1" > SignUP </button>
           <button  onClick={SigninHandler} className="btn2" > SignIN </button>
           </div>
    </div>
    </div>
            

    )
};

export default Homepage;