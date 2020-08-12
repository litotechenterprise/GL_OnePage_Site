import React, {useState} from 'react'
import { Row, Col, Image} from 'react-bootstrap';
import '../css/features.css'

const features = () => {
    return (
        <section >
            <div className='features'>
                <Row>
                    <Col lg='4'>
                        <div className='box'>
                            <i class="fas fa-map-marked-alt fa-5x feat-icon"></i>
                        </div>
                        
                        <h3>Stay Close</h3>
                        <p>GreenLinks allows you to find all events that are happening near you. So you probably already know that spot!</p>
                    </Col>
                    <Col lg='4'>
                        <div className='box' >
                            <i class="fas fa-user-check fa-5x feat-icon"></i>
                        </div>
                        
                        <h3>Express yourself</h3>
                        <p>Spend Less time on your phones and more time in you</p>
                    </Col>
                    <Col lg='4'>
                        <div className='box' >
                            <i class="fas fa-seedling fa-5x feat-icon"></i> 
                        </div>
                        
                        <h3>Grow as a Community</h3>
                        <p>Attend and host events that only your community can see</p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}


export default features;