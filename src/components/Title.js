import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import LoginContext from "../LoginContext";
import LoginModal from "./LoginModal";
import LogOutButton from "./LogOutButton";

function Title() {

    const [token] = useContext(LoginContext)

    // put in log in context for the token
    return(
        <>
            <Container>
                <h1>To Do's</h1>
                {token ? <LogOutButton /> : <LoginModal />}
            </Container>
        </>
    )
}

export default Title;