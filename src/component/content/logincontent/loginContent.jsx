import React from "react";
import "./loginContent.css";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function LoginContent() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        navigate('/home');
    }
    setValidated(true);
  };

  return (
    <div className="form-allcontent-login">
        <div className="form-bg-login">
            <Link to="/" style={{ textDecoration: "none" }}>
                <Navbar.Brand href="#" className="title-form">
                    <span className="title-form-1">Sleep</span>
                    <span className="title-form-2">Ez</span>
                </Navbar.Brand>
            </Link>
            <div className="subtitle-form">
                <span className="subtitle-text-form">Login here if you already have an account</span>
            </div>
            <div className="form-content">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">Email can't be empty</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                            <Form.Control.Feedback type="invalid">Password can't be empty</Form.Control.Feedback>
                    </Form.Group>
            {/* <Link to="/" style={{textDecoration:'none'}}> */}
                <div className="button-login-login">
                    <Button type="submit" className="login-btn-login">Login</Button>
                </div>
                <p className="or-text">Or</p>
                <Link to="/signup" style={{textDecoration:'none'}}>
                    <div className="button-signup-login">
                        <Button className="signup-btn-login">Sign Up</Button>
                    </div>
                </Link>
            {/* </Link> */}
                </Form>
            </div>
        </div>
    </div>
  );
}

export default LoginContent;
