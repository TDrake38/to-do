import React, { useContext } from "react";
import LoginContext from "../LoginContext";
import LoginModal from "./LoginModal";
import LogOutButton from "./LogOutButton";
import SignUpModal from "./SignUpModal";

function Title() {

    const [token] = useContext(LoginContext)

    return(
        <>
            <h1>To Do's</h1>
            <SignUpModal /*need to use state to switch between login and sign up button then when there is a token show login button*//>
            {token ? <LogOutButton /> : <LoginModal />}
            
        </>
    )
}

export default Title;