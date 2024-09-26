import React from "react";
import './Overview.css';
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { useState } from "react";

function OverviewR(){

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    return(
        <>
        <div className="align-items-center">

            {/* Heading */}
            <section className="pt-5 pb-2"><Container><h5 style={{textAlign:'left'}}>Overview</h5></Container></section>

            {/* Overview */}
            <section>
                <Container className="px-5 align-items-center">
                    
                    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="green">
                        <Carousel.Item>
                            <Card body className="statusBox py-3">
                                <p style={{color:"green", fontSize:"32pt"}}>Safe</p>
                                <p style={{fontSize:"12pt", textAlign:"left"}}>Estate A</p>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card body className="statusBox py-3">
                                <p style={{color:"green", fontSize:"32pt"}}>Intrusion</p>
                                <p style={{fontSize:"12pt", textAlign:"left"}}>Estate B</p>
                            </Card>
                        </Carousel.Item>
                    </Carousel>

                    
                    <Row className="py-3">
                        <Col><Card body style={{width:'37rem'}}>Detections</Card></Col>
                        <Col><Card body style={{width:'37rem'}}>Manual Verifications</Card></Col>
                    </Row>
                    <Row className="py-3">
                        <Col><Card body style={{width:'76rem'}}>Issue Beacons: None</Card></Col>
                    </Row>
                    <Row className="py-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15938.21396439459!2d101.8734406!3d2.9437504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdce0fd89c5829%3A0xca94557719d2191!2sUniversity%20of%20Nottingham%20Malaysia!5e0!3m2!1sen!2s!4v1691501851235!5m2!1sen!2s" 
                        width="400" 
                        height="300" 
                        style={{border:"0;"}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Row>
                </Container>
            </section>
        </div>
        </>
    );
}

export default OverviewR;