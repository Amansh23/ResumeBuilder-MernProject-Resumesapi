
import axios from "../../helpers/axiosconfig";
import {  loaduser, _error ,removeuser} from "../Reducers/userSlice";

export * from "../Reducers/userSlice";
export const async_loaduser = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/me");
        dispatch(loaduser(data.user));
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};


export const async_removeuser = () => async (dispatch, getState) => {
    try {
        await axios.get("/signout");
        dispatch(removeuser());
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};


export const async_signin = (user) => async (dispatch, getState) => {
    try {
        const d = await axios.post("/signin", user);
        console.log(d.data);
        dispatch(async_loaduser());
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};



export const async_signup = (newuser) => async (dispatch, getState) => {
    try {
        const d = await axios.post("/signup", newuser );
        console.log(d.data);
        dispatch(async_loaduser());
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};


export const async_sendmail = () => async (dispatch, getState) => {
    try {
        const d = await axios.post("/send-mail", {
            email: "sheryians.community@gmail.com",
        });
        console.log(d.data);
    } catch (error) {
        console.log(error);
        dispatch(_error(error.response.data.message));
    }
};

export const async_verifyotp = () => async (dispatch, getState) => {
    try {
        const d = await axios.post("/verify-otp", {
            email: "sheryians.community@gmail.com",
            otp: "1234",
            password: "654321",
        });
        console.log(d.data);
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};

export const async_resetpassword = (id) => async (dispatch, getState) => {
    try {
        const d = await axios.post("/reset-password/" + id, {
            oldpassword: "123456",
            newpassword: "654321",
        });
        console.log(d.data);
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};


export const async_createresume = () => async (dispatch, getState) => {
    try {
        const resumedets = {
            education: JSON.parse(localStorage.getItem("education")) || [],
            skill: JSON.parse(localStorage.getItem("skill")) || [],
            experience: JSON.parse(localStorage.getItem("experience")) || [],
            projects: JSON.parse(localStorage.getItem("projects")) || [],
            interest: JSON.parse(localStorage.getItem("interest")) || [],
        };
        const id = getState().userReducer.user._id;
        const { data } = await axios.post("/resume/create/" + id, resumedets);
        console.log(data);
        dispatch(async_loaduser(data.user));
        // localstorage empty code
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};

export const async_uploadimage = (formData) => async (dispatch, getState) => {
    try {
        const id = getState().userReducer.user._id;
        const { data } = await axios.post("/avatar/" + id, formData);
        console.log(data);
        dispatch(async_loaduser(data.user));
        // localstorage empty code
    } catch (error) {
        dispatch(_error(error.response.data.message));
    }
};