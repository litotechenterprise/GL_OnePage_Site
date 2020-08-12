import React from 'react'
import {Nav, Navbar, Container, Row, Col, Image, Button} from 'react-bootstrap'
import How from './components/How'
import Features from './components/features'
import When from './components/When'
import Iphone from './assets/images/Iphone.png'
import Footer from './components/Footer'
import CityBK from './assets/images/city52.png'
import './css/Main.css'

const App = () => {
    return(
        <div>
            <Navbar className="Navbar" collapseOnSelect expand="lg" variant='dark'  style={{color:''}}>
                <Navbar.Brand href="#home" style={{fontFamily:'lobster', fontSize: '50px'}}><i class="fas fa-link"></i> GreenLinks</Navbar.Brand>
                <Navbar.Toggle aria-controls="respodsnsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="justify-content-end, Nav-btns" >
                        <Nav.Link className="Nav-btn" eventKey={2} href="#what" onMouseEnter={(e) => console.log(e)}>What</Nav.Link>
                        <Nav.Link className="Nav-btn" eventKey={3} href="#why" style={{color: 'White'}}>How</Nav.Link>
                        <Nav.Link className="Nav-btn" eventKey={4} href="#when" style={{color: 'White'}}>When</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            

            <section>
                {/* <img className='city' src={CityBK} /> */}
                <div className='Hook'>
                    <Row>
                        <Col lg='6'>
                            <h1 className="hook_title">...Bored af ? See what events happening right now near you</h1>
                            <Row style={{width:'100%', textAlign:'center', padding:'7% 0%'}}>
                                <Col>
                                    <button type="button" class="btn btn-dark btn-lg download-btn"> <i class="fab fa-apple"></i> App Store</button>
                                </Col>

                                <Col>
                                    <button type="button"class="btn btn-outline-light btn-lg download-btn"><i class="fab fa-google-play"></i> Google Play Store</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg='6' style={{}}>
                            <img src={Iphone} className="Image"/>
                        </Col>
                    </Row>
                </div>
            </section>

            <Features />
            {/* <How /> */}
            <When />
            <Footer/>
        </div>
    )
}



export default App;