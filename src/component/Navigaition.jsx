import React from 'react'
import { Container,Navbar,Nav,NavDropdown } from 'react-bootstrap'
import {FiGift} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navigation = () => {
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
              <Nav>
                <Link className="nav-link" to='/login'>Sign in</Link>
                <Link className="nav-link" to='/register'>Sign up</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

  )
}

export default Navigation