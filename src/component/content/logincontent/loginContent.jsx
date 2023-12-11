import React from "react";
import "./loginContent.css";
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LoginContent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="form-allcontent">
        <div className="form-bg">
            <Link to="/" style={{ textDecoration: "none" }}>
                <Navbar.Brand href="#" className="title-form">
                    <span className="title-form-1">Sleep</span>
                    <span className="title-form-2">Ez</span>
                </Navbar.Brand>
            </Link>
            <div className="subtitle-form">
                <span className="subtitle-text-form">Register and join us for better life</span>
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

                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                                <Form.Control required type="text" placeholder="First name" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Name can't be empty</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="I agree to following SleepEz terms and conditions."
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
            {/* <Link to="/" style={{textDecoration:'none'}}> */}
                <div className="button-login-login">
                    <Button type="submit" className="login-btn-login">Login</Button>
                </div>
                <p className="or-text">Or</p>
                <div className="button-signup-login">
                    <Link to="/signup" style={{textDecoration:'none'}}>
                        <Button className="signup-btn-login">Sign Up</Button>
                    </Link>
                </div>
            {/* </Link> */}
                </Form>
            </div>
        </div>
    </div>
  );
}

export default LoginContent;
