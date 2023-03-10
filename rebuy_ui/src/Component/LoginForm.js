<<<<<<< HEAD
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { toast } from "react-toastify";
import { login } from "../Services/User_service";
=======
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// import ./Login.css
import { ToastContainer } from 'react-toastify'
const LoginForm=()=> {
    const { Userid } = useParams();
>>>>>>> f2b99fb952d47deab7262c3033bf13bac78e6f38

const LoginForm = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
=======
  
    
    return (
        
        <div>
           
<div className='ul'>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <div className="card mt-5">
                            <div className="card-header text-center fs-3 text-success">Login</div>
                                <div className="card-body">
                                <div className="mb-3">
                                    <label>Email </label>
                                    <input type="email" id="email" className='form-control' name='email' 
                                    placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
>>>>>>> f2b99fb952d47deab7262c3033bf13bac78e6f38

  const handleReset = () => {
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  const handleChange = (event, field) => {
    let actualValues = event.target.value;

    setLoginDetails({
      ...loginDetails, //here actual copy of value is created not refrence
      [field]: actualValues, //here only that field get set which is changed
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetails);

    if (loginDetails.email == "") {
      toast.error("Email is Required");
      return;
    }
    if (loginDetails.password == "") {
      toast.error("Enter password");
      return;
    }

// SUBMIT data to server
    login(loginDetails).then((resp)=>{
      console.log(resp);
      console.log("User logged succesfully");
      toast.success("Welcome "+resp.firstName);
      navigate("/user");
    })
    .catch((e)=>{
      console.log(e);
      console.log("login faied");
    })

  };

  return (
    <>
      <Container style={{ marginTop: 60 }}>
        <Row>
          <Col sm={{ size: 5, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h4 style={{ color: "green" }}>Login!!</h4>
              </CardHeader>

              <CardBody>
                {/* form creation */}

                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      id="email"
                      value={loginDetails.email}
                      onChange={(e) => handleChange(e, "email")}
                    ></Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      id="password"
                      value={loginDetails.password}
                      onChange={(e) => handleChange(e, "password")}
                    ></Input>
                  </FormGroup>
                </Form>
                <Container>
                  <Button color="success" onClick={handleFormSubmit}>
                    Login
                  </Button>
                  <Link className="btn btn-warning ms-2" to={"/SignUp"}>
                    Register
                  </Link>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
