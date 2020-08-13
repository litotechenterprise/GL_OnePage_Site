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
                        
                        <h3 className='sub_title'>Stay Close</h3>
                        <p>Find all events that are happening near you. You probably already know the spot!</p>
                    </Col>
                    <Col lg='4'>
                        <div className='box' >
                            <i class="fas fa-globe-americas fa-5x feat-icon"></i>
                        </div>
                        
                        <h3 className='sub_title'>Explore</h3>
                        <p>Get off your phone and be present in this moment! See what wonderful things are taking place around you</p>
                    </Col>
                    <Col lg='4'>
                        <div className='box' >
                            <i class="fas fa-seedling fa-5x feat-icon"></i> 
                        </div>
                        
                        <h3 className='sub_title'>Grow as a Community</h3>
                        <p>Meet the members of your community, Support eachother businesses, performances, events and grow together!</p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}


export default features;