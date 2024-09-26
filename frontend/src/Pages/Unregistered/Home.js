import React from "react";
import elephant from "../Components/Images/elephant.jpg";
import { Container, Row, Col} from "react-bootstrap";
import {BsBell, BsPinMap, BsTree, BsPeople, BsCheckSquare} from 'react-icons/bs';
import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            {/* Title Area */}
            <section class="p-5">
                <div>
                    <div class="d-lg-flex align-itmes-center">
                        <img src={elephant} alt="An elephant" className="img-fluid w-25"/>
                        <div>
                            <h1 class="pt-lg-5 px-3">Experience Unparalleled Plantation and Village Safety with Our Real-time <span style={{color:"#C8CB26"}}>Early Warning Detection System</span>.</h1>
                            <h6 class="px-3">Trusted and Utilized by 15 Plantations and Villages in Malaysia</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Bar */}
            <section class="p-5 bg-secondary-subtle">
                <Container>
                    <div class="row text-center">
                        <div class="col">
                            <BsBell size={46}/>
                            <p className="pt-3">Real Time Notifications</p>
                        </div>
                        <div class="col">
                            <BsPinMap size={46}/>
                            <p className="pt-3">Heatmap of Identifications</p>
                        </div>
                        <div class="col">
                            <BsTree size={46}/>
                            <p className="pt-3">Improve Crop Safety</p>
                        </div>
                        <div class="col">
                            <BsPeople size={46}/>
                            <p className="pt-3">Employee Peace of Mind</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Feature Overview */}
            <section className="p-5" >
                <h2 style={{textAlign:"left"}}>Where the future of safety begins</h2>
                <p style={{textAlign:"left"}}>Discover the true meaning of peace of mind as we proudly present a solution that takes just 29 days to set up, revolutionizing the way we protect what matters most.</p>
                <Row><Col xs={1}><BsCheckSquare/></Col><Col><p style={{textAlign:"left"}}>Detect Elephant Frequency</p></Col></Row>
                <Row><Col xs={1}><BsCheckSquare/></Col><Col><p style={{textAlign:"left"}}>Detect High Danger Areas</p></Col></Row>
                <Row><Col xs={1}><BsCheckSquare/></Col><Col><p style={{textAlign:"left"}}>Identify Prime Times</p></Col></Row>
                <Row><Col xs={1}><BsCheckSquare/></Col><Col><p style={{textAlign:"left"}}>Learn how to combat the threat</p></Col></Row>
                <Row><Col xs={1}><BsCheckSquare/></Col><Col><p style={{textAlign:"left"}}>And more. <Link to="/features">See all features!</Link></p></Col></Row>
            </section>

        </div>
    );
}

export default Home;