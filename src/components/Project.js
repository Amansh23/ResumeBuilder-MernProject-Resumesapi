import React from 'react'
import { useState } from 'react';

const Project = () => {
    const projectsTemplate = {
        name: "",
    };
    const [projects, setprojects] = useState(
        JSON.parse(localStorage.getItem("projects")) || [projectsTemplate]
    );

    const Changehandler = (e, index) => {
        const updatedprojects = projects.map((pro, i) =>
            index == i ? { ...pro, [e.target.name]: e.target.value } : pro
        );
        setprojects(updatedprojects);
    };

    const AddHandler = () => {
        setprojects([...projects, projectsTemplate]);
    };
    const DeleteHandler = (index) => {
        const copyprojects = [...projects];
        copyprojects.splice(index, 1);
        setprojects(copyprojects);
        localStorage.setItem("projects", JSON.stringify(copyprojects));
    };

    const Saveproject = () => {
        localStorage.setItem("projects", JSON.stringify(projects));
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

    const projectbox = {
        width:"100%",
        minHeight:"90vh",
        // backgroundColor:"blue",
        padding:"1vmax",
        overflowX:"hidden",
        overflowY:"auto"
        
    }
    const projectsource = {
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
    const projectheading = {
        fontSize:"25px",
        fontFamily:"gilroy SemiBold",
        marginLeft:"30px"
    }

    const prbox = {
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
        <div style={projectbox}>
            {projects.map((e, idx) => (
                <div  style={projectsource} key={idx}>
                    <h1 style={projectheading}>Add Your Projects</h1>
                    <div style={prbox}>
                    <input
                        style={input1}
                        name="name"
                        type="text"
                        placeholder="Project Name"
                        onChange={(e) => Changehandler(e, idx)}
                        value={projects[idx].name}
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
            <button style={savebtn} onClick={Saveproject}>Save</button>
            </div>
            
        </div>
    );
}

export default Project