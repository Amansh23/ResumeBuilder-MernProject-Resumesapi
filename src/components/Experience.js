import React from 'react'
import { useState } from 'react';

const Experience = () => {
    const experienceTemplate = {
        name: "",
    };
    const [experience, setexperience] = useState(
        JSON.parse(localStorage.getItem("experience")) || [experienceTemplate]
    );

    const Changehandler = (e, index) => {
        const updatedexperience = experience.map((exp, i) =>
            index == i ? { ...exp, [e.target.name]: e.target.value } : exp
        );
        setexperience(updatedexperience);
    };

    const AddHandler = () => {
        setexperience([...experience, experienceTemplate]);
    };
    const DeleteHandler = (index) => {
        const copyexperience = [...experience];
        copyexperience.splice(index, 1);
        setexperience(copyexperience);
        localStorage.setItem("experience", JSON.stringify(copyexperience));
    };

    const Saveexperience = () => {
        localStorage.setItem("experience", JSON.stringify(experience));
    };


    const btnbox = {
        width:"50%",
        minHeight:"6vmax",
        padding:"1vmax",
        // backgroundColor:"red",   
        marginTop:"10px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }

    const Addmorebtn = {
        width:"40%",
        minHeight:"3vmax",
        backgroundImage:"linear-gradient(to right, white, navy)",
        borderRadius:"10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"gilroy SemiBold",
        fontSize:"15px",
        color:"white",
        border:"none"

    }

    const savebtn = {
        width:"40%",
        minHeight:"3vmax",
        backgroundImage:"linear-gradient(to right, white, navy)",
        borderRadius:"10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"gilroy SemiBold",
        fontSize:"15px",
        color:"white",
        border:"none"
    }

    const experiencebox = {
        width:"100%",
        minHeight:"90vh",
        // backgroundColor:"blue",
        padding:"1vmax",
        overflowX:"hidden",
        overflowY:"auto"
        
    }
    const experiencesource = {
        width:"100%",
        minHeight:"3vmax",
        borderRadius:"15px",
        backgroundColor:"white",
        padding:"1vmax",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginTop:"10px"
    }
    const experienceheading = {
        fontSize:"25px",
        fontFamily:"gilroy SemiBold",
        marginLeft:"30px"
    }

    const expbox = {
        width:"100%",
        minHeight:"2vmax",
        // backgroundColor:"red",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0.5vmax 1.5vmax"
    }

    const input1 = {
        marginTop:"10px",
        width:"30%",
        minHeight:"1vmax",
        padding:"1vmax",
        borderRadius:"10px",
        fontFamily:"gilroy",
        outline:"none"
    }

    const deletebtn = {
        width:"30%",
        // minHeight:"50%",
        padding:"1vmax",
        borderRadius:"15px",
        backgroundImage:"linear-gradient(to right, white, navy)",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        fontFamily:"gilroy SemiBold",
        fontSize:"10px",
        color:"white",
        // position:"absolute",
        // right:"-10%"
    }

    return (
        <div style={experiencebox}>
            {experience.map((e, idx) => (
                <div  style={experiencesource} key={idx}>
                    <h1 style={experienceheading}>Add Your Experiences</h1>
                    <div style={expbox}>
                    <input
                        style={input1}
                        name="name"
                        type="text"
                        placeholder="Experiences"
                        onChange={(e) => Changehandler(e, idx)}
                        value={experience[idx].name}
                    />

                    <span style={deletebtn} 
                    onClick={() => DeleteHandler(idx)}>
                        ❌
                        <h2>Delete</h2>
                        </span>
                    </div>
                </div>
            ))}

            <div style={btnbox}>
            <button style={Addmorebtn} onClick={AddHandler}>Add More</button>
            <button style={savebtn} onClick={Saveexperience}>Save</button>
            </div>
            
        </div>
    );
}

export default Experience