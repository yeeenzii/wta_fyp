import { Col, Container, Row, Dropdown, Card } from "react-bootstrap";

function Heatmap(){

    const date= new Date().toDateString();
    const time = new Date().getHours() + ':' + new Date().getMinutes();
    
    return(
        <div>
            {/* Heading */}
            <section className="pt-5 pb-2"><Container><h5 style={{textAlign:'left'}}>Heatmap</h5></Container></section>

            {/* Tags and Beacon Dropdown */}
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Row style={{backgroundColor:"lightgray"}}>
                            <Col>Detections: 23 </Col>
                            <Col>Prime Time: {date}</Col>
                            <Col>Prime Date: {time}</Col>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <Dropdown>
                                <Dropdown.Toggle variant="tertiary" size="md">Beacon Statistics</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Card body>
                                            <h5>Beacon 1</h5>
                                            <p>information</p>
                                            <p>info</p>
                                        </Card>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Card body>
                                            <h5>Beacon 2</h5>
                                            <p>info</p>
                                            <p>information</p>
                                        </Card>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Heatmap */}
            <section>
                <Container>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15938.21396439459!2d101.8734406!3d2.9437504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdce0fd89c5829%3A0xca94557719d2191!2sUniversity%20of%20Nottingham%20Malaysia!5e0!3m2!1sen!2s!4v1691501851235!5m2!1sen!2s" 
                        className="pt-5"
                        width="1100" 
                        height="575" 
                        style={{border:"0;"}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Container>
            </section>
        </div>
    );
}

export default Heatmap;