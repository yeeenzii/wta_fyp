import { Card, Container, Form, FormLabel, InputGroup} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function Quote(){
    const [site, setSite] = useState("Plantation")

    function onSiteChange(event){
        setSite(event.target.value)
    }

    return(
        <div>
            {/* Title */}
            <section className="p-5">
                <Container style={{textAlign:"left"}}>
                <h1>Request Quote</h1>
                <p>Get WildTechAlert setup in your plantation or village</p>
                <p>Discover the true meaning of peace of mind as we proudly present a solution to reduce elephant conflict, revolutionizing the way we protect what matters most.</p>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <FormLabel>Site Type</FormLabel>
                                <label className="px-3"><input type="radio" value={"Plantation"} checked={site === "Plantation"} onChange={onSiteChange} />Plantation</label>
                                <label className="px-3"><input type="radio" value={"Village"} checked={site === "Village"} onChange={onSiteChange} />Village</label>
                                <label className="px-3"><input type="radio" value={"Other"} checked={site === "Other"} onChange={onSiteChange} />Other</label>
                            </Form.Group>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Company Description</InputGroup.Text>
                                <Form.Control as="textarea" rows={3} />
                            </InputGroup>

                            <h5>Site</h5>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Site Name</InputGroup.Text>
                                <Form.Control type="text"/>
                            </InputGroup>  
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Site Address</InputGroup.Text>
                                <Form.Control type="address"/>
                            </InputGroup>   
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Site Number</InputGroup.Text>
                                <Form.Control type="number"/>
                            </InputGroup> 

                            <h5>Space Information</h5>


                            <h5>Operation Information</h5>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Number of Employees</InputGroup.Text>
                                <Form.Control type="number"/>
                            </InputGroup> 

                            <h5>Personal Information</h5>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Name</InputGroup.Text>
                                <Form.Control type="text"/>
                            </InputGroup> 
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Email</InputGroup.Text>
                                <Form.Control type="email"/>
                            </InputGroup> 
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Phone Number</InputGroup.Text>
                                <Form.Control type="text"/>
                            </InputGroup> 
                        </Form>
                        <Link to="/" className="btn btn-outline-success">Submit Request</Link>
                    </Card.Body>
                </Card>
                </Container>
            </section>


        </div>
    );
}

export default Quote;