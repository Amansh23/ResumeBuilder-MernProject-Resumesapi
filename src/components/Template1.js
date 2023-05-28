import React from 'react'
import { useSelector } from 'react-redux'
import MailFillIcon from 'remixicon-react/MailFillIcon'
import ContactsBookFillIcon from 'remixicon-react/ContactsBookFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'
const Template1 = () => {
    const {user} = useSelector((state)=>state.userReducer)
    const last  = user.resumes.slice(-1)
    const skillNames = last[0].skill.map(obj => obj.name);
    const educationNames = last[0].education;
    const projectsNames = last[0].projects.map(obj => obj.name);
    const experinceNames = last[0].experience.map(obj => obj.name);
    const interestNames = last[0].interest.map(obj => obj.name);
    console.log(interestNames)


    const resumetemp = {
        width:"100%",
        minHeight:'45vmax',
        backgroundColor:"yellow",
        marginTop:"2vmax",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    }

    const resumetemp1 = {
        width:"70%",
        minHeight:"43vmax",
        backgroundColor:"white",
        padding:"2vmax",
        position:"relative"
    }

    const line = {
        padding:"0.1vmax",
        minHeight:"2vmax",
        backgroundColor:"black",
        width:"0.1%",
        marginLeft:"2px",
        marginTop:"5px"
    }

    
    const line1 = {
        padding:"0.1vmax",
        minHeight:"3vmax",
        backgroundColor:"black",
        width:"0.1%",
        marginLeft:"2px",
        marginTop:"5px"
    }

    const contentdiv = {
        width:"20%",
        minHeight:"1vmax",
        // backgroundColor:"yellow",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"10px"
    }

    const skillboxstyle = {
        marginLeft:"10px",
        marginTop:"10px"
    }

    const biggerbox = {
        width:"60%",
        minHeight:"40vmax",
        position:"absolute",
        top:"2%",
        right:"2%",
        // backgroundColor:"yellow",
        padding:"1vmax"
    }


  return (
    <div style={resumetemp}>
        <div style={resumetemp1} >
            <div style={line}></div>
            <h1>{user.name}</h1>
            <div style={line1}></div>
            <div style={contentdiv}>
                <MailFillIcon/>
                <h3>{user.email}</h3>
            </div>
            <div style={contentdiv}>
                <ContactsBookFillIcon/>
                <h3>{user.contact}</h3>
            </div>
            <div style={line1}></div>
            <h1>Skills</h1>
            <div style={skillboxstyle} >
                {skillNames.map((i,e) => <h3 style={{marginTop:"10px"}} key={e}> <span>-</span> {i}</h3>)}
            </div>
            <div style={line}></div>
            <h1 style={{marginTop:"10px"}}>Education</h1>
                  <h2 style={{fontSize:"15px",marginLeft:"2px",marginTop:"10px"}}> <span style={{fontSize:"18px"}} >Institute - </span>{educationNames[0].institute} </h2>
                  <h2 style={{fontSize:"15px",marginLeft:"2px",marginTop:"10px"}}> <span style={{fontSize:"18px"}} >University - </span>{educationNames[0].university} </h2>
                  <h2 style={{fontSize:"15px",marginLeft:"2px",marginTop:"10px"}}> <span style={{fontSize:"18px"}} >Degree - </span>{educationNames[0].degree} </h2>
                  <h2 style={{fontSize:"15px",marginLeft:"2px",marginTop:"10px"}}> <span style={{fontSize:"18px"}} >Year - </span>{educationNames[0].year} </h2>
                  <h2 style={{fontSize:"15px",marginLeft:"2px",marginTop:"10px"}}> <span style={{fontSize:"18px"}} >Grade - </span>{educationNames[0].grade} </h2>
                  <div style={line}></div>
            <div style={biggerbox}>
               <div style={line}></div>
               <h1>Profile</h1>
               <div style={line1}></div>
               <p>Innovative FrontEnd & BackEnd Developer seeking an opportunity to help brand to grow. Expertise in JavaScript, Node.JS , Html , CSS , React.JS, AdobeTools, C, AdobeXD and UI / UX Development.</p>
               <div style={line}></div>
               <h1>Projects</h1>
               <div>
               {projectsNames.map((i,e) => <h3 style={{marginTop:"10px"}} key={e}> <span>-</span> {i}</h3>)}
               </div>
               <div style={line}></div> 
               <h1>Experiences</h1>
                <> {experinceNames.map((i,e) => <h3 style={{marginTop:"10px"}} key={e}> <span>-</span> {i}</h3>)}</>
                <div style={line}></div> 
                <h1>Interest</h1>
                <> {interestNames.map((i,e) => <h3 style={{marginTop:"10px"}} key={e}> <span>-</span> {i}</h3>)}</>
                <div style={line}></div> 
            </div>
        </div>
    </div>
  )
}

export default Template1