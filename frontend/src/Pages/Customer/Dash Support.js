import {Button, Container, Form, InputGroup} from "react-bootstrap";
import pic1 from "../Components/Images/aramijaya elephant2.png"
import { useState } from "react";

function DashSupport(){
    const [issue, setIssue] = useState("Intrusion")
    function onIssueChange(event){
        setIssue(event.target.value)
    }

    return(
        <div>
            {/* Title */}
            <section className="p-5">
                <Container style={{textAlign:"left"}}>
                <h1>Responding to an Intrusion</h1>
                </Container>
            </section>

            {/* Info */}
            <section className="px-5">
                <div className="px-3">
                    <div className="d-lg-flex">
                        <ol style={{textAlign:"left"}}>
                            <li>
                                <h5>Stay Calm and Alert</h5>
                                <p>Upon receiving an intrusion alert, remain calm and alert to effectively handle the situation. Remember that elephants are large and powerful creatures, so it's important to approach the situation with caution.</p>
                            </li>
                            <li>
                                <h5>Assess the threat</h5>
                                <p>Evaluate the severity of the intrusion by determining the number of elephants involved, their behavior, and proximity to human settlements or sensitive areas. This information will help you determine the appropriate response.</p>
                            </li>
                            <li>
                                <h5>Activate safety measure</h5>
                                <p>If you have established safety measures in place, such as electric fences or deterrent devices, ensure they are activated immediately. These measures can help discourage elephants from approaching further or entering restricted areas.</p>
                            </li>
                            <li>
                                <h5>Evacuate and Secure Human Safety</h5>
                                <p>If there is a direct threat to human safety, initiate an evacuation plan to move people away from the immediate vicinity of the elephants. Ensure that everyone is informed and directed to a safe location away from the intruding elephants.</p>
                            </li>
                        </ol>
                        
                        <div className="px-4" style={{textAlign:"right"}}>
                            <img src={pic1} alt="An elephant" className="img-fluid w-50"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticket */}
            <section className="p-5">
                <Container style={{textAlign:"left"}}>
                    <h1 className="p-3">Create a Ticket</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label className="py-3">Site Type</Form.Label>
                            <label className="px-3"><input type="radio" value={"Intrusion"} checked={issue === "Intrusion"} onChange={onIssueChange} />Intrusion</label>
                            <label className="px-3"><input type="radio" value={"Beacon"} checked={issue === "Beacon"} onChange={onIssueChange} />Beacon</label>
                            <label className="px-3"><input type="radio" value={"Else"} checked={issue === "Else"} onChange={onIssueChange} />Else</label>
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Describe the issue</InputGroup.Text>
                            <Form.Control as="textarea" rows={5} />
                        </InputGroup>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Container>
            </section>
        </div>
    );
}

export default DashSupport;