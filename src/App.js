import React from 'react'
import {Nav, Navbar, Container, Row, Col, Image} from 'react-bootstrap'
import Why from './components/Why'
import When from './components/When'
import What from './components/What'
import Iphone from './assets/images/Iphone.png'
import './css/Main.css'

const App = () => {
    return(
        <div>
            <Navbar className="Navbar" collapseOnSelect expand="lg" variant='dark'  style={{color:''}}>
                <Navbar.Brand href="#home" style={{fontFamily:'lobster', fontSize: '35px'}}><i class="fas fa-link"></i> GreenLinks</Navbar.Brand>
                <Navbar.Toggle aria-controls="respodsnsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="justify-content-end, Nav-btns" >
                        <Nav.Link className="Nav-btn" eventKey={2} href="#what" onMouseEnter={(e) => console.log(e)}>What</Nav.Link>
                        <Nav.Link className="Nav-btn" eventKey={3} href="#why" style={{color: 'White'}}>Why</Nav.Link>
                        <Nav.Link className="Nav-btn" eventKey={4} href="#when" style={{color: 'White'}}>When</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='Hook'>
               
                <Row style={{flex:1}}>
                    <Col lg='6' style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <h1>See whats poppin near you... or just link with friends</h1>
                    </Col>
                    <Col lg='6' style={{}}>
                        <img src={Iphone} className="Image"/>
                    </Col>
                </Row>
            
            </div>
            <What />
            <Why/>
            <When /> 
        </div>
    )
}



export default App;