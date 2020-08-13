import React, {useState} from 'react'
import {Nav, Navbar, Container, Row, Col, Image, Button} from 'react-bootstrap'
import How from './components/How'
import Features from './components/features'
import When from './components/When'
import What from './components/What'
import Iphone from './assets/images/Iphone.png'
import Footer from './components/Footer'
import CityBK from './assets/images/city52.png'
import './css/Main.css'

const App = () => {
    const [what, setWhat] = useState(false)
    const [how, setHow] = useState(false)
    const [when, setWhen] = useState(false)


    return(
        <div>
            <Navbar className="Navbar" collapseOnSelect expand="lg" variant='dark'  style={{color:''}}>
                <Navbar.Brand href="#home" style={{fontFamily:'lobster', fontSize: '50px'}}><i class="fas fa-link"></i> GreenLinks</Navbar.Brand>
                <Navbar.Toggle aria-controls="respodsnsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="justify-content-end, Nav-btns" >
                        <Nav.Link className="Nav-btn" eventKey={2} href="#what"  style={what ? { color:'white', fontFamily:'Montserrat',fontWeight:'bold'}:{color:'white', fontFamily:'Montserrat'}} onMouseEnter={() => setWhat(true)} onMouseLeave={() => setWhat(false)}>What</Nav.Link>
                        <Nav.Link className="Nav-btn" eventKey={3} href="#how" style={how ? { color:'white', fontFamily:'Montserrat',fontWeight:'bold'}:{color:'white', fontFamily:'Montserrat'}} onMouseEnter={() => setHow(true)} onMouseLeave={() => setHow(false)} >How</Nav.Link>
                        <Nav.Link className="Nav-btn" eventKey={4} href="#when" style={when ? { color:'white', fontFamily:'Montserrat', fontWeight:'900'}:{color:'white', fontFamily:'Montserrat'}} onMouseEnter={() => setWhen(true)} onMouseLeave={() => setWhen(false)}>When</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <section>
                {/* <img className='city' src={CityBK} /> */}
                <div className='Hook'>
                    <Row>
                        <Col lg='6'>
                            <h1 className="hook_title">...Bored af ? See what's goin down near you.</h1>
                        </Col>
                        <Col lg='6' style={{}}>
                            <img src={Iphone} className="Image"/>
                        </Col>
                    </Row>
                </div>
            </section>

            <Features />
            <What />
            <How />
            <When />
            <Footer/>
        </div>
    )
}



export default App;