import React, { useState } from "react";

const Skill = () => {
    const skillTemplate = {
        name: "",
    };
    const [skill, setskill] = useState(
        JSON.parse(localStorage.getItem("skill")) || [skillTemplate]
    );

    const Changehandler = (e, index) => {
        const updatedskill = skill.map((ski, i) =>
            index == i ? { ...ski, [e.target.name]: e.target.value } : ski
        );
        setskill(updatedskill);
    };

    const AddHandler = () => {
        setskill([...skill, skillTemplate]);
    };
    const DeleteHandler = (index) => {
        const copyskill = [...skill];
        copyskill.splice(index, 1);
        setskill(copyskill);
        localStorage.setItem("skill", JSON.stringify(copyskill));
    };

    const Saveskill = () => {
        localStorage.setItem("skill", JSON.stringify(skill));
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

    const skillbox = {
        width:"100%",
        minHeight:"90vh",
        // backgroundColor:"blue",
        padding:"1vmax",
        overflowX:"hidden",
        overflowY:"auto"
        
    }
    const skillsource = {
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
    const skillheading = {
        fontSize:"25px",
        fontFamily:"gilroy SemiBold",
        marginLeft:"30px"
    }

    const skbox = {
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
        <div style={skillbox}>
            {skill.map((e, idx) => (
                <div  style={skillsource} key={idx}>
                    <h1 style={skillheading}>Add Your Skills</h1>
                    <div style={skbox}>
                    <input
                        style={input1}
                        name="name"
                        type="text"
                        placeholder="Skill Name"
                        onChange={(e) => Changehandler(e, idx)}
                        value={skill[idx].name}
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
            <button style={savebtn} onClick={Saveskill}>Save</button>
            </div>
            
        </div>
    );
};

export default Skill;