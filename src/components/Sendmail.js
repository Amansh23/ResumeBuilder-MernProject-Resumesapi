import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { async_sendmail } from "../store/Actions/userActions";

const Sendmail = () => {
    const { errors } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sendmailHandler = async () => {
        await dispatch(async_sendmail());
        if (errors) {
            toast.error(errors);
            return;
        } else {
            navigate(
                "/sendmail/" + "sheryians.community@gmail.com/" + "verify"
            );
        }
    };

    return (
        <div>
            <button onClick={sendmailHandler}>Send Mail</button>
            <hr />
            <Outlet />
        </div>
    );
};

export default Sendmail;