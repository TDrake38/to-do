import React from "react";
import List from "./List";
import LoginModal from "./LoginModal";
import LogOutButton from "./LogOutButton";

function Home() {
    return(
        <>
            <div>List <LoginModal/></div>
            <List/>
        </>
    )
}

export default Home;