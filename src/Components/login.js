import react,{useState,useRef,useEffect} from "react";
import '../App.css';
import styled from "styled-components";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row , Col,Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


export default function LoginForm(){
    const [strEmail,setEmail]=useState('');
    const [strPassword,setPassword]=useState('');
    const navigate = useNavigate();
  
    
    const clickfun= ()=>{
        axios.post('https://ttravel-guideback.herokuapp.com/admin/login', {
            password:strPassword,email:strEmail
          }).then(function (response){
            console.log("response",response)
            navigate('./overview')
          })
          .catch(error=>{
            console.log(error)
          })


    }


   
    return(
        <Container fluid >
            <Row style={{marginTop:90}}>
                <Col className="col-lg-4 col-md-3 col-sm-2" ></Col>
                <Col className="col-lg-4 col-md-3 col-sm-2"></Col>
                <Col className="col-lg-4 col-md-3 col-sm-6" style={{textAlign:'center'}}>
                    <h1 style={{color:'#21A5B7'}}>
                        Login
                    </h1>
                    <ColoredLine color="black" width="30vh" /> 

                </Col>
            </Row>

            <Row  style={{marginTop:30}}>
                <Col className="col-lg-4 col-md-3 col-sm-2"></Col>
                <Col className="col-lg-4 col-md-3 col-sm-2"></Col>
                <Col className="col-lg-4 col-md-3 col-sm-6">
                    <Form onSubmit={(e)=>e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontSize:'20px'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={strEmail} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{fontSize:'20px'}}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={strPassword} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        
                        <Button style={{fontSize:'20px'}} variant="primary" type="submit"  onClick={()=>clickfun()} > 
                            Submit
                        </Button>

                        <div style={{textAlign:'center' , marginTop:'20px'  , fontSize:'20px'}}>Doesn't have an account? <a style={{textDecoration:'none', fontWeight:'bold'}} href='/role'>Sign Up</a> </div>
                    </Form>
                </Col>
            </Row>
            
           
        </Container>
    );
}



const ColoredLine = ({ color , width }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            width: width,
            marginRight:"auto",
            marginLeft:"auto"
        }}
    />
);
