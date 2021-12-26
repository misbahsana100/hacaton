import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import Home from './Home';
import Contact from './Contact';
import Services from './Services'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Signup from './Signup';

const Hotel = () => {
  return (
    <div>
        <Router> 
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ZIFAN HOTEL</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  as = {Link}  to ={'/Home'}>Home</Nav.Link>
      <Nav.Link  as = {Link}  to ={'/Contact'}>Contact</Nav.Link>
      <Nav.Link  as = {Link}  to ={'/Services'}>Service</Nav.Link>
      
    </Nav>
    <Nav.Link  as = {Link}  to ={'/Signup'}><button>Signup</button></Nav.Link>
      
    </Container>
  </Navbar>

  <Routes>
          <Route path="/Home"  element ={<Home/>} />
          <Route path="/Contact"     element ={<Contact/>}  />
         < Route path="/Services"  element ={<Services/>} />
         < Route path="/Signup"  element ={<Signup/>} />

        
        </Routes>
        


    
        </Router> 

    </div>
  )
}

export default Hotel
