import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Overview(){

    const date= new Date().toDateString();
    const time = new Date().getHours() + ':' + new Date().getMinutes();
    
    return(
        <div className="align-items-center">
            {/* Heading */}
            <section className="pt-5 pb-2"><Container><h5 style={{textAlign:'left'}}>Overview</h5></Container></section>

            {/* Overview */}
            <section>
                <Container className="px-5 align-items-center">
                    <Card body className="py-3">
                        <p style={{color:"green", fontSize:"32pt"}}>Safe</p>
                        <p style={{fontSize:"12pt", textAlign:"left"}}>Status</p>
                    </Card>
                    <Row className="py-3">
                        <Col><Card body style={{width:'37rem'}}>Intrusions</Card></Col>
                        <Col><Card body style={{width:'37rem'}}>Next Maintanence: {date}</Card></Col>
                    </Row>
                    <Row>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15938.21396439459!2d101.8734406!3d2.9437504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdce0fd89c5829%3A0xca94557719d2191!2sUniversity%20of%20Nottingham%20Malaysia!5e0!3m2!1sen!2s!4v1691501851235!5m2!1sen!2s" 
                        width="800" 
                        height="300" 
                        style={{border:"0;"}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Overview;