import React from 'react'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { async_createresume } from '../store/Actions/userActions';

const Interest = () => {

    const dispatch  = useDispatch()
    const navigate =  useNavigate()


    

    const interestTemplate = {
        name: "",
    };
    const [interest, setinterest] = useState(
        JSON.parse(localStorage.getItem("interest")) || [interestTemplate]
    );

    const Changehandler = (e, index) => {
        const updatedinterest = interest.map((int, i) =>
            index == i ? { ...int, [e.target.name]: e.target.value } : int
        );
        setinterest(updatedinterest);
    };

    const AddHandler = () => {
        setinterest([...interest, interestTemplate]);
    };
    const DeleteHandler = (index) => {
        const copyinterest = [...interest];
        copyinterest.splice(index, 1);
        setinterest(copyinterest);
        localStorage.setItem("interest", JSON.stringify(copyinterest));
    };

    const Saveinterest = () => {
        localStorage.setItem("interest", JSON.stringify(interest));
    };


    const SaveResumeHandler = async () => {
        await dispatch(async_createresume());
        navigate("/template");
    };


    const btnbox = {
        width:"80%",
        minHeight:"6vmax",
        padding:"1vmax",
        // backgroundColor:"red",   
        marginTop:"10px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }

    const Addmorebtn = {
        width:"20%",
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
        width:"20%",
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

    const interestbox = {
        width:"100%",
        minHeight:"90vh",
        // backgroundColor:"blue",
        padding:"1vmax",
        overflowX:"hidden",
        overflowY:"auto"
        
    }
    const interestsource = {
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
    const interestheading = {
        fontSize:"25px",
        fontFamily:"gilroy SemiBold",
        marginLeft:"30px"
    }

    const intbox = {
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
        <div style={interestbox}>
            {interest.map((e, idx) => (
                <div  style={interestsource} key={idx}>
                    <h1 style={interestheading}>Add Your Interest</h1>
                    <div style={intbox}>
                    <input
                        style={input1}
                        name="name"
                        type="text"
                        placeholder="Interest Name"
                        onChange={(e) => Changehandler(e, idx)}
                        value={interest[idx].name}
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
            <button style={savebtn} onClick={Saveinterest}>Save</button>
            <button style={savebtn} onClick={SaveResumeHandler}>Submit Your Resume . </button>
            </div>
            
        </div>
    );
}

export default Interest