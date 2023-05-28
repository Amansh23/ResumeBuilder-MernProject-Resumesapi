import React from 'react'
import { useNavigate,Link, Outlet } from 'react-router-dom'

const Template = () => {

   const navigate =  useNavigate()

   const templatebox = {
       width:"100vmax",
       minHeight:"45vmax",
      //  backgroundColor:"red",
       padding:"2vmax",
       fontFamily:"gilroy SemiBold",

   }

    const tempselect = {
      width:"90vmax",
      minHeight:"18vmax",
      backgroundColor:"white",
      marginTop:"20px",
      padding:"1vmax",
      display:"flex",
    }


    const templatecard = {
      width:"18%",
      minHeight:"100%",
      // backgroundColor:"blue",
      borderRadius:"10px",
      overflow:"hidden",
      marginLeft:"12px"
    }
    const templatecardimagebox = {
      width:"100%",
      minHeight:"75%",
      
    }

    const templatecardimage = {
      width:"100%",
      height:"100%",
      objectfit:"cover"
    }

    const templatecardcontent = {
      width:"100%",
      minHeight:"25%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"gilroy regular",
      fontSize:"12px",
      backgroundColor:"#FFC003"
    }

    const backbtn = {
      width:"15%",
      minHeight:"3vmax",
      backgroundColor:"#FFC003",
      borderRadius:"10px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"15px",
      fontFamily:"gilroy",
      color:"white",
      fontWeight:"700",
      border:"none",
      cursor:"pointer"
    }
    
    const temphead = {
      width:"100%",
      minHeight:"8vmax",
      // backgroundColor:"blue",
      padding:"2vmax",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"

    }
    
    const templatecardcontentlink = {
      textDecoration:"none",
      fontFamily:"gilroy SemiBold",
      fontSize:"18px",
      color:"white"
    }


    const backtoprofile = () =>{
      navigate('/profile')
    }




  return (
    <div style={templatebox} >
        <div style={temphead}>
          <h2>Please Select Your Template</h2>
          <button onClick={backtoprofile} style={backbtn}> Back to Profile </button>
          </div>
        <div style={tempselect}>
          <div style={templatecard}>
            <div style={templatecardimagebox}>
                <img style={templatecardimage} src="https://images.unsplash.com/photo-1682686581484-a220483e6291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            </div>
            <div style={templatecardcontent}>
                      <Link to='/template/1' style={templatecardcontentlink}>Template No.1</Link>
            </div>
          </div>
        </div>

        <hr />
        <Outlet/>
    </div>
  )
}

export default Template