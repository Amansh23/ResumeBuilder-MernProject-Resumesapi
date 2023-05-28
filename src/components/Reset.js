import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { async_resetpassword } from "../store/Actions/userActions";

const Reset = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    return (
        <div>
            <button onClick={() => dispatch(async_resetpassword(user._id))}>
                Reset Password
            </button>
        </div>
    );
};

export default Reset;