import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FiGift} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const navigate = useNavigate()

  const spaceHome =()=>{
    navigate('/')
  }


  return (
    <div style={{display:'flex', justifyContent:"center",alignItems:'center',height:'500px'}}>
      <div>
        <div onClick={spaceHome} style={{display:'flex', fontSize:'50px',fontWeight:'600' ,margin:"60px", justifyContent:'center',alignItems:'center', fontStyle:'italic', cursor:'pointer'}}><FiGift style={{marginRight:"10px"}}/>Gift-Musical</div>
        <Form style={{width:'500px'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" style={{fontSize:'20px'}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" style={{fontSize:'20px'}}/>
          </Form.Group>
          <Button variant="dark" size="lg" type="submit" style={{float:'right'}} onClick={spaceHome}>
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Signin