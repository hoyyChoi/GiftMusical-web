import { useEffect } from 'preact/hooks';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FiGift} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Signup = () => {

  const navigate = useNavigate()

  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
    
  

  const spaceHome =()=>{
    navigate('/')
  }
  // https://cors-anywhere.herokuapp.com/
  const Login =(e)=>{
    e.preventDefault();

    // postRegisterUser({
    //       "email" : "moa1@com",
    //       "password" : "m123",
    //       "password2" : "m123",
    //       "role" : "ROLE_USER",
    //       "authProvider" : "GOOGLE"
    //     })
    // .then(res=>{
    //     console.log(res)
       
    // })
    // .catch((err)=>console.log(err));
    // await fetch("http://ec2-43-200-222-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/users/me")
    // .then((response) => console.log(response))

    fetch("http://ec2-43-200-222-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        "email" : "moa1@com",
        "password" : "m123",
        "password2" : "m123",
        "role" : "ROLE_USER",
        "authProvider" : "GOOGLE"
      }),
    }).then((response) => console.log(response));
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
   
    
 
}


  return (
    <div style={{display:'flex', justifyContent:"center",alignItems:'center',height:'500px'}}>
    <div>
      <div onClick={spaceHome} style={{display:'flex', fontSize:'50px',fontWeight:'600' ,margin:"60px", justifyContent:'center',alignItems:'center', fontStyle:'italic', cursor:'pointer'}}><FiGift style={{marginRight:"10px"}}/>Gift-Musical</div>
      <Form onSubmit={(e)=>Login(e)} style={{width:'500px'}}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" placeholder="Your Name" style={{fontSize:'20px'}}  onChange={(event)=>{setUsername(event.currentTarget.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{fontSize:'20px'}}  onChange={(event)=>{setEmail(event.currentTarget.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{fontSize:'20px'}}  onChange={(event)=>{setPassword(event.currentTarget.value)}}/>
        </Form.Group>
        <Button variant="dark" size="lg" type="submit" style={{float:'right'}} >
          Sign up
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Signup