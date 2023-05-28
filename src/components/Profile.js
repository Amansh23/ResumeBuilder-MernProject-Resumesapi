
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import { async_removeuser } from "../store/Actions/userActions";

const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.userReducer);

    const createHandler = () => {
        navigate("/createpage")
    }

    const profilepage = {
        width:"100vmax",
        height:"45vmax",
        display:"flex",
        background:"linear-gradient(to bottom, #FFC003 20%,Transparent 30%,white 50%,white 100%)",
    }

    const profileleft = {
        width:"30vmax",
        minHeight:"45vmax",
        backgroundColor:"#FFC003",
        borderBottomRightRadius:"20px",
        padding:"1vmax"
    }

    const profileright = {
        width:"70vmax",
        height:"45vmax",
        backgroundColor:"white",
        borderTopLeftRadius:"20px",
        padding:"1vmax",
        position:"relative"
    }

    const top = {
        width:"100%",
        minHeight:"14vmax",
        // backgroundColor:"red",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"

    }

    const profilecircle = {
        width:"10vmax",
        height:"10vmax",
        borderRadius:"50%",
        background:"white"
    }

    const intro = {
        fontFamily:"gilroy SemiBold",
        fontSize:"20px",
        color:"black",
        marginTop:"1vmax"
    }

    const bottom = {
        width:"100%",
        minHeight:"28vmax",
        // background:"red",
        marginTop:"20px",
        padding:"1vmax"
    }

    const linkbox = {
        width:"100%",
        padding:"0vmax 1vmax",
        // background:"white",
        display:"flex",
        marginTop:"20px"
    }

    const iconbox = {
        width:"10%",
        height:"100%",
        // background:"blue",
        padding:"0.5vmax",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"20px",
        color:"white"
    }

    const linknamebox = {
        width:"80%",
        height:"100%",
        // background:"purple",
        padding:"0.5vmax",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        fontSize:"20px",
        color:"white",

    }

    const linkicon = {
        textDecoration:"none",
        color:"white",
        fontFamily:"gilroy SemiBold"
    }

    const linklist = {
        textDecoration:"none",
        color:"white",
        fontFamily:"gilroy SemiBold"
    }

    const bar = {
        width:"100%",
        minHeight:"6vmax",
        // background:"purple",
        padding:"1vmax",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }

    const leftbar = {
        width:"15%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"white",
        borderRadius:"10px"
    }
    const rightbar = {
        width:"50%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"white",

    }

    const createbox = {
        width:"25vmax",
        minHeight:"20vmax",
        // background:"red",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        padding:"1vmax",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    }

    const createh1 = {
        fontSize:"33px",
        fontFamily:"gilroy SemiBold",
        color:"black"
    }

    const createh2 = {
        fontSize:"23px",
        fontFamily:"gilroy SemiBold",
        color:"black",
        marginTop:"15px"
    }

    const createh2span = {
        fontSize:"23px",
        fontFamily:"gilroy SemiBold",
        color:"black",
        marginLeft:"20px"
    }

    const arrow = {
        textDecoration:"none",
        marginTop:"3px",
        marginLeft:"5px"
    }
    

    console.log( JSON.stringify({user}))
    return (
      
        <div style={profilepage}>
            <div style={profileleft}>
                    <div style={top}>
                        <div style={profilecircle}></div>
                        <h2 style={intro}> Welcome, { user.name}</h2>
                    </div>
                    <div style={bottom}>
                        <div style={linkbox}>
                            <div style={iconbox}>
                             <Link style={linkicon}>   <i class="ri-mail-line"></i> </Link>
                            </div>
                            <div style={linknamebox}>
                                <Link style={linklist}> {user.email} </Link>
                            </div>
                        </div>
                        <div style={linkbox}>
                            <div style={iconbox}>
                             <Link style={linkicon}>  <i class="ri-phone-line"></i> </Link>
                            </div>
                            <div style={linknamebox}>
                                <Link style={linklist}> {user.contact} </Link>
                            </div>
                        </div>
                        <div style={linkbox}>
                            <div style={iconbox}>
                             <Link style={linkicon}>   {user.resumes.length} </Link>
                            </div>
                            <div style={linknamebox}>
                                <Link style={linklist}> No. of Resumes Created </Link>
                            </div>
                        </div>
                        <div style={linkbox}>
                            <div style={iconbox}>
                             <Link style={linkicon}>   {user.resumes.length} </Link>
                            </div>
                            <div style={linknamebox}>
                                <Link to='/template' style={linklist}> No. of Templates Available </Link>
                            </div>
                        </div>
                        
                        <div style={linkbox}>
                            <div style={iconbox}>
                             <Link style={linkicon}>   <i class="ri-refresh-line"></i> </Link>
                            </div>
                            <div style={linknamebox}>
                                <Link style={linklist}>Reset Password</Link>
                            </div>
                        </div>
                        <div style={linkbox}>
                            <div style={iconbox}>
                             <Link style={linkicon} to=''><i class="ri-logout-circle-line"></i> </Link>
                            </div>
                            <div style={linknamebox}>
                               <button  onClick={() => dispatch(async_removeuser())} className="signoutbtn">Signout</button>
                            </div>
                        </div>
                    </div>
            </div>
            <div style={profileright}>
                    <div style={bar}>
                            <div style={leftbar}>
                               <button className="viewbtn" >View Profile</button>
                            </div>
                            <div style={rightbar}>

                            </div>
                    </div>
                    <div style={createbox}>
                        <h1 style={createh1}>Let's Create your resume</h1>
                        <h2 style={createh1}>according to your job</h2>
                        <h2 style={createh2}>It's time to show the world <br /><span style={createh2span}> what you have done !</span></h2>
                        <button onClick={createHandler} className="createbtn">Create Resume <i style={arrow}class="ri-arrow-right-s-line"></i></button>
                    </div>
            </div>  
        </div>
    );
};

export default Profile;