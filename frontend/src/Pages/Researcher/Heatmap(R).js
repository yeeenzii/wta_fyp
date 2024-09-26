import { Col, Container, Row, Dropdown, Card } from "react-bootstrap";

function HeatmapR(){

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
                    <div id="map"/>
                </Container>
            </section>

            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization"/>
        </div>
    );
}

export default HeatmapR;