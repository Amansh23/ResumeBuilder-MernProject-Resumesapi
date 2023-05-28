import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import server from '../components/Images/server.png'

const Createpage = () => {

    const createpage = {
      width:"100vmax",
      minHeight:"45vmax",
    //   background:"red" ,
      display:"flex" ,
      background:"linear-gradient(to bottom, #FFC003 20%,Transparent 30%,white 50%,white 100%)",
    }
    const left = {
        width:"20%",
        minHeight:"45vmax",
        padding:"3vmax 2vmax",
        backgroundColor:"#FFC003",
        borderBottomRightRadius:"3vmax",
        position:"relative",

    }
    const right = {
        width:"80%",
        minHeight:"45vmax",
        background:"yellow",
        padding:"1vmax",
        backgroundColor:"white",
        borderTopLeftRadius:"3vmax",
        position:"relative",
    }

    const linkbox = {
        width:"100%",
        background:"white",
        padding:"20px",
        marginTop:"10px",
        borderRadius:"10px",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }
    const linkstyle = {
        textDecoration:"none",
        fontSize:"20px",
        fontFamily:"gilroy SemiBold",
        color:"#FFC003"
    }

    const outletbox = {
        width:"100%",
        minHeight:"100%",
        backgroundImage:`url(${server})`,
        backgroundPosition:"center",
        backgroundRepeat:'no-repeat',
        borderRadius:"30px",
        padding:"2vmax",
        overflow:"auto"
    }
  return (
    <div style={createpage}>
        <div style={left}>
            <div style={linkbox}>
                <Link to="/createpage/education" style={linkstyle}  >Education</Link>
            </div>
            <div style={linkbox}>
                <Link to="/createpage/skill" style={linkstyle}  >Skills</Link>
            </div>
            <div style={linkbox}>
                <Link  to="/createpage/project" style={linkstyle}  >Projects</Link>
            </div>
            <div style={linkbox}>
                <Link to="/createpage/experience"  style={linkstyle}  >Experience</Link>
            </div>
            <div style={linkbox}>
                <Link to="/createpage/interest" style={linkstyle}  >Interest</Link>
            </div>
            <div style={linkbox}>
                <Link to="/profile" style={linkstyle}  >BACK TO PREVIOUS</Link>
            </div>
        </div>
        <div style={right}>
            <div style={outletbox}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Createpage