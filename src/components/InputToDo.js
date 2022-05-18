import React, { useContext } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import LoginContext from "../LoginContext";

function InputToDo() {
    const [token] = useContext(LoginContext)

    return(
        <InputGroup className="mb-3 s-bar">
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
                <Button variant="dark">Add</Button>
            </InputGroup>
    )
}

export default InputToDo;