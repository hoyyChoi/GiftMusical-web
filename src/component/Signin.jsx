import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FiGift} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import  {postRegisterUser} from '../remotes/index';
import { useSelector,useDispatch} from 'react-redux';

const Signin = () => {

  const [disable,setDisable] = useState(true)
  const [email,setEmail] = useState('')
  const [password,setPw] = useState('')
  const navigate = useNavigate()
  let auth = useSelector(state=>state.auth)
  let dispatch = useDispatch()
  const spaceHome = () =>{
    navigate('/')
  }
  
  
  


  const LoginSubmit =(e)=>{
    e.preventDefault();
   
    postRegisterUser({email,password})
    .then(res=>{
        localStorage.setItem("token",res.data.data.token)
        console.log(res.data.data.token)
        dispatch({type:'auth'})
         navigate('/')
    })
    .catch((err)=>console.log(err));
   
  }


  return (
    <div style={{display:'flex', justifyContent:"center",alignItems:'center',height:'500px'}}>
      <div>
        <div onClick={spaceHome} style={{display:'flex', fontSize:'50px',fontWeight:'600' ,margin:"60px", justifyContent:'center',alignItems:'center', fontStyle:'italic', cursor:'pointer'}}><FiGift style={{marginRight:"10px"}}/>Gift-Musical</div>
        <Form style={{width:'500px'}} onSubmit={(e)=>LoginSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" style={{fontSize:'20px'}} onChange={e=>setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" style={{fontSize:'20px'}} onChange={e=>setPw(e.target.value)} />
          </Form.Group>
          <Button variant="dark" size="lg" type="submit" style={{float:'right'}} > 
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Signin