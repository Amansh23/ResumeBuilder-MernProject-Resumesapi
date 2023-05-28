import React, { useEffect } from "react";
import { async_loaduser } from "./store/Actions/userActions";
import { useDispatch } from "react-redux";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import Sendmail from "./components/Sendmail";
import Verifyotp from "./components/Verifyotp";
import Reset from "./components/Reset";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Createpage from "./components/Createpage"
import Education from "./components/Education"
import Skill from "./components/Skill";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Interest from "./components/Interest";
import Readallresumes from "./components/Readallresumes";
import Template from "./components/Template";
import Template1 from "./components/Template1";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(async_loaduser());
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/sendmail" element={<Sendmail />}>
                    <Route
                        path="/sendmail/:email/verify"
                        element={<Verifyotp />}
                    />
                </Route>
                {/* ------------------------------------------------------- */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                 <Route
                    path="/reset"
                    element={
                        <ProtectedRoute>
                            <Reset />
                        </ProtectedRoute>
                    }
                />
                <Route 
                    path="/createpage"
                    element={
                        <ProtectedRoute>
                            <Createpage />
                        </ProtectedRoute>
                    }>
                        <Route 
                        path="/createpage/education"
                        element={<Education/>}
                        />
                        <Route 
                        path="/createpage/skill"
                        element={<Skill/>}
                        />
                        <Route 
                        path="/createpage/project"
                        element={<Project/>}
                        />
                         <Route 
                        path="/createpage/experience"
                        element={<Experience/>}
                        />
                         <Route 
                        path="/createpage/interest"
                        element={<Interest/>}
                        />
                       
                </Route>
                <Route
                    path="/template"
                    element={
                        <ProtectedRoute>
                            <Template />
                        </ProtectedRoute>
                    }
                >
                 <Route 
                        path="/template/1"
                        element={<Template1/>}
                        />   
                </Route>
                <Route
                    path="/resume/readall/"
                    element={
                        
                            <Readallresumes />
                        
                    }
                />
            </Routes>
        </div>
    );
};

export default App;