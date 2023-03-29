import React,{useEffect,useState} from 'react'
import { Container,Navbar,Nav,NavDropdown } from 'react-bootstrap'
import {FiGift} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginUser } from '../remotes'
import Modal from 'react-bootstrap/Modal';
import UserInfo from './UserInfo'

const Navigation = ({userInfo}) => {



  const dispatch = useDispatch();
  let auth = useSelector(state=>state.auth)

  const logout = ()=>{
    localStorage.removeItem('token')
    dispatch({type:'authB'})
  }


  return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><div style={{display:'flex' ,fontStyle:'italic'}}><FiGift style={{marginRight:"5px"}}/>Gift-Musical</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/practice">일정보기</Nav.Link>
                <Nav.Link href="#pricing">연습</Nav.Link>
                
              </Nav>
              {auth?<Nav>
                <Link className="nav-link" to='/userInfo'>{userInfo.email}</Link>
                <Link className="nav-link" onClick={logout}>Log-out</Link>
              </Nav>
              :
              <Nav>
              <Link className="nav-link" to='/login'>Sign in</Link>
              <Link className="nav-link" to='/register'>Sign up</Link>
            </Nav>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

  )
}

export default Navigation