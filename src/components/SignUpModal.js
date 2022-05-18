import React from "react";
import { Button, Modal, Form} from "react-bootstrap"
import LoginContext from "../LoginContext";
import { useContextPersisted } from "./Hooks";

const signUp = async ({ username, password}) => {
  const body = { username: username, password: password };
  const response = await fetch("http://localhost:3001/signup", { body: JSON.stringify(body), headers: {'Content-Type': 'application/json'}, method: "POST" } );
  const { accessToken } = await response.json()
  return accessToken;
}

function MyModal(props) {
     const [token, setToken] = useContextPersisted(LoginContext, "token")
  
    const buttonSubmit = async (e) => {
      e.preventDefault();
      const token = await signUp({ username: e.target.elements.sign_username.value, password: e.target.elements.sign_password.value });
      localStorage.setItem("token", JSON.stringify(token));
      setToken(token)
    }
  
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header>
          <Modal.Title >
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={buttonSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" id="sign_username" name="sign_username"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id="sign_password" name="sign_password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  
  function SignUpModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="dark" onClick={() => setModalShow(true)}>
          Sign Up
        </Button>
  
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default SignUpModal;