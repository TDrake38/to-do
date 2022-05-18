import React from "react";
import List from "./List";
import InputToDo from "./InputToDo";

function Home() {
    return(
        <>
            <div>List</div>
            <InputToDo/>
            <List/>
        </>
    )
}

export default Home;