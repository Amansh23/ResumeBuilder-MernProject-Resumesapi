import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { async_verifyotp } from "../store/Actions/userActions";
const Verifyotp = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const verifyotphandler = async () => {
        await dispatch(async_verifyotp());
        navigate("/signin");
    };

    return (
        <div>
            <h3>Verify OTP</h3>

            <button onClick={verifyotphandler}>Verify OTP</button>
        </div>
    );
};

export default Verifyotp;