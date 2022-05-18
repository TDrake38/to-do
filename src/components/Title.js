import React, { useContext } from "react";
import LoginContext from "../LoginContext";
import LoginModal from "./LoginModal";
import LogOutButton from "./LogOutButton";

function Title() {

    const [token] = useContext(LoginContext)

    return(
        <>
            <h1>To Do's</h1>
            {token ? <LogOutButton /> : <LoginModal />}
        </>
    )
}

export default Title;