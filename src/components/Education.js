import React from 'react'
import { useState } from 'react';

const Education = () => {

    const educationTemplate = {
        institute: "",
        university: "",
        degree: "",
        grade: "",
        year: "",
    };
    const [education, setEducation] = useState(
        JSON.parse(localStorage.getItem("education")) || [educationTemplate]
    );

    const Changehandler = (e, index) => {
        const updatedEducation = education.map((edu, i) =>
            index == i ? { ...edu, [e.target.name]: e.target.value } : edu
        );
        setEducation(updatedEducation);
    };

    const AddHandler = () => {
        setEducation([...education, educationTemplate]);
    };
    const DeleteHandler = (index) => {
        const copyEducation = [...education];
        copyEducation.splice(index, 1);
        setEducation(copyEducation);
        localStorage.setItem("education", JSON.stringify(copyEducation));
    };

    const SaveEducation = () => {
        localStorage.setItem("education", JSON.stringify(education));
    };

    const eductaionbox = {
        width:"100%",
        minHeight:"90vh",
        // backgroundColor:"blue",
        padding:"1vmax",
        overflowX:"hidden",
        overflowY:"auto"
        
    }
    
    const educationsource = {
        width:"100%",
        minHeight:"10vmax",
        borderRadius:"15px",
        backgroundColor:"white",
        padding:"1vmax",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginTop:"10px"
    }

    const educationheading = {
        fontSize:"25px",
        fontFamily:"gilroy SemiBold",
        marginLeft:"30px"
    }

    const educationh2 = {
        fontSize:"15px",
        fontFamily:"gilroy regular",
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

    const edbox = {
        width:"100%",
        minHeight:"2vmax",
        // backgroundColor:"red",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        padding:"0.5vmax"
    }

    const edbox1 = {
        width:"101%",
        minHeight:"2vmax",
        // backgroundColor:"red",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        padding:"0.5vmax",
        marginLeft:"8px"
    }

    const edbox2 = {
        width:"80%",
        minHeight:"2vmax",
        // backgroundColor:"red",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        padding:"0.5vmax 4vmax",
        // marginLeft:"8px",
        position:"relative"
    }

    const input2 = {
        marginTop:"10px",
        width:"30%",
        minHeight:"1vmax",
        padding:"1vmax",
        borderRadius:"10px",
        fontFamily:"gilroy",
        outline:"none",
        marginLeft:"115px"
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
        position:"absolute",
        right:"-10%"
    }

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
    return (
        <div style={eductaionbox} >
            {education.map((e, idx) => (
                <div style={educationsource}   key={idx}>
                    <h1 style={educationheading}>Add Your Eductaion</h1>
                    <div style={edbox}>
                      <h2 style={educationh2}>Institute Name</h2>
                      <input
                        style={input1}
                        name="institute"
                        autoComplete='off'
                        type="text"
                        placeholder="Institute Name"
                        onChange={(e) => Changehandler(e, idx)}
                        value={education[idx].institute}
                     />
                     <h2 style={educationh2}>University Name</h2>
                     <input
                         style={input1}
                         name="university"
                         autoComplete='off'
                         type="text"
                         placeholder="University Name"
                         onChange={(e) => Changehandler(e, idx)}
                         value={education[idx].university}
                     />
                   </div>
                   
                    <div style={edbox1}>
                    <h2 style={educationh2}>Degree</h2>
                    <input
                        style={input1}
                        name="degree"
                        autoComplete='off'
                        type="text"
                        placeholder="Degree Name"
                        onChange={(e) => Changehandler(e, idx)}
                        value={education[idx].degree}
                    />
                    <h2 style={educationh2}>Grade</h2>
                    <input
                        style={input1}
                        name="grade"
                        type="text"
                        autoComplete='off'
                        placeholder="Grade"
                        onChange={(e) => Changehandler(e, idx)}
                        value={education[idx].grade}
                    />
                    </div>

                    <div style={edbox2}>
                     <h2 style={educationh2}>Year</h2>
                     <input
                         style={input2}
                         name="year"
                         autoComplete='off'
                         type="text"
                         placeholder="Year"
                         onChange={(e) => Changehandler(e, idx)}
                         value={education[idx].year}
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
            <button style={savebtn} onClick={SaveEducation}>Save</button> 
            </div>
            
        </div>
    );
};


export default Education