import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import '../css/when.css'

const When = () => {
    return (
       <section>
           <div className='Hook'>
               <Container style={{width:"50%"}}>
                    <h1 className="coming" style={{fontFamily:'Montserrat'}}>Coming soon to....</h1>
                    <Row style={{}}>
                        <Col lg='6'>
                            <button type="button" class="btn btn-dark btn-lg download-btn"> <i class="fab fa-apple"></i> App Store</button>
                        </Col>

                        <Col lg='6'>
                            <button type="button"class="btn btn-outline-light btn-lg download-btn"><i class="fab fa-google-play"></i> Google Play Store</button>
                        </Col>
                    </Row>
               </Container>
               
           </div>

          
       </section>
    )
}



export default When