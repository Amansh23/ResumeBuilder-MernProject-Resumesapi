import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { async_removeuser } from "../store/Actions/userActions";

const Navigation = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.userReducer);
    return (
        <div>
            <h4>Navigation</h4>
            {!isAuthenticated ? (
                <>
                    <Link to="/">Homepage</Link> <br />
                    <Link to="/signup">Signup</Link> <br />
                    <Link to="/signin">Signin</Link> <br />
                </>
            ) : (
                <>
                    <Link to="/profile">Profile</Link> <br />
                    <Link to="/reset">Reset Password</Link> <br />
                    <button onClick={() => dispatch(async_removeuser())}>
                        Signout
                    </button>
                </>
            )}
        </div>
    );
};

export default Navigation;