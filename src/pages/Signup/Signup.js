import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import axios from "axios"
import "./Signup.css"

export default function Signup(props) {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    let temp = { ...user };
    temp[e.target.name] = e.target.value;
    setUser(temp);
  };

  const signupHandler = () => {
    props.setUserInState(user)
    axios.post("/users/new", user)
    navigate("/")
  }

  return (
    <div className="signup">
      <Container>
        <div id='formWrapper'>
        <img src="signup.png"></img>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              onChange={changeHandler}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              onChange={changeHandler}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="emailAddress"
              onChange={changeHandler}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={changeHandler}
            ></Form.Control>
          </Form.Group>
          <Button varient="primary" onClick={signupHandler} className="submit-btn">Register</Button>
        </div>
      </Container>
      <div className="studentImg">
        <img src="tutor.png" alt="" />
      </div>
    </div>
  );
}