import React from 'react'
import {Card, Row,Col } from 'react-bootstrap'
import '../css/How.css'

const How = () => {
    return(
        <section>
            <div className="title_container">
                <h1 className="how_title">....Yo so how does it work?</h1>
                <div className="chart">
                    <Row>
                        <Col md='6'>
                            <div className='feed_container'>
                                <h2 className="heading">Finding Events</h2>
                                <ol className="feed-list">
                                    <li className="point">
                                        
                                        <Row>
                                            <Col><h5 className='List_head'>1.</h5></Col>
                                            <Col><p className='List_dir' className='List_dir'>Swipe to Feed</p></Col>
                                            <Col><i class="fas fa-arrows-alt-h fa-7x list_icon"></i></Col>
                                        </Row>
                                    </li>
                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>2.</h5></Col>
                                            <Col><p className='List_dir'>Adjust Filters</p></Col>
                                            <Col><i class="fas fa-sort-amount-down fa-7x list_icon"></i></Col>
                                        </Row>
                                      
                                            
                                         
                                       
                                    </li>
                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>3.</h5></Col>
                                            <Col><p className='List_dir'>Select Event</p></Col>
                                            <Col><i class="fas fa-calendar-check fa-7x list_icon"></i></Col>
                                        </Row>
                                    </li>
                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>4.</h5></Col>
                                            <Col><p className='List_dir'>Peep MapView</p></Col>
                                            <Col><i class="fas fa-map-marked-alt fa-7x list_icon"></i></Col>
                                        </Row>
                                        
                                            
                                          
                                            
                                       
                                    </li>
                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>5.</h5></Col>
                                            <Col><p className='List_dir' style={{paddingTop:'20px'}}>Pull Up</p></Col>
                                            <Col><i class="fas fa-walking fa-7x list_icon"></i></Col>
                                        </Row>  
                                        
                                    </li>
                                </ol>
                            </div>
                            
                        </Col>
                        <Col md='6'>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                        </Col>
                        <Col md='6'>
                            <div className="post_container">
                                <h2 className="heading">Posting Events</h2>
                                <ol className="post_list">
                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>1</h5></Col>
                                            <Col><p className='List_dir'>Write Content</p></Col>
                                            <Col><i class="fas fa-pencil-alt fa-7x list_icon"></i></Col>
                                        </Row>
                                    </li>
                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>2</h5></Col>
                                            <Col><p className='List_dir'>Select Subject</p></Col>
                                            <Col><i class="fas fa-hand-pointer fa-7x list_icon"></i></Col>
                                        </Row>
                                    </li>

                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>3</h5></Col>
                                            <Col><p className='List_dir'>Choose audiance</p></Col>
                                            <Col><i class="fas fa-certificate fa-7x list_icon"></i></Col>
                                        </Row>
                                    </li>

                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>4</h5></Col>
                                            <Col><p className='List_dir'> Set privacy settings</p></Col>
                                            <Col><i class="fas fa-unlock fa-7x list_icon"></i></Col>
                                        </Row>
                                    </li>

                                    <li className="point">
                                        <Row>
                                            <Col><h5 className='List_head'>5</h5></Col>
                                            <Col><p className='List_dir'>Prepare to host</p></Col>
                                            <Col><i class="fas fa-users fa-7x list_icon"></i></Col>
                                        </Row>

                                    </li>
                                </ol>

                            </div>
                        </Col>
                    </Row>
                </div>
            
            </div>
        </section>
    )
}

export default How;