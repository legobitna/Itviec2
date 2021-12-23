import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as authAction from "../store/actions/authaction";

export default function Login({ login }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let loading = false;

  // if (user.isAuthenticated == true) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="App">
      <div className="navigation">
        <Container>
          <img className="logo-itviec" alt="itviec" src="/images/itviec.png" />
        </Container>
      </div>
      {/* {error ? <Alert variant="danger">{error}</Alert> : <></>} */}
      <Container className="middle">
        <Form
          className="white-container"
          onSubmit={(e) => login(e, { email, password })}
        >
          <div className="login-title-box">
            <img src="https://itviec.com/favicon-96x96.png" width="40px" />
            <h1 className="login-title">Login</h1>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="xxxxx@gmail.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {loading ? (
            <div>loading...</div>
          ) : (
            <Button variant="danger" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Container>
    </div>
  );
}
