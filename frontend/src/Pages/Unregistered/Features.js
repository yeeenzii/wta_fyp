import { Col, Container, Row} from "react-bootstrap";
import elephant from "../Components/Images/Elephant 2.JPG";
import {BsBell, BsPinMap, BsTree, BsPeople, BsClock} from 'react-icons/bs';
import { Link } from "react-router-dom";

function Features (){
    return(
        <div>
            {/* Title */}
            <section className="p-5">
                <Container style={{textAlign:"left"}}>
                <h1>Features of WildTech<span style={{color:"#C8CB26"}}>Alert</span></h1>
                <p>Trusted and Utilized by 15 Plantations and Villages in Malaysia</p>
                </Container>
            </section>

            {/* Body */}
            <section className="px-5">
                <div className="px-3">
                    <div className="d-lg-flex">
                        <img src={elephant} alt="An elephant" className="img-fluid w-50"/>
                        <div className="px-4" style={{textAlign:"right"}}>
                            <Row><Col><h4>Real Time Notifications</h4></Col><Col xs={1}><BsBell/></Col></Row>
                            <p>We have harnessed the power of cutting-edge algorithms to precisely identify and analyze elephant frequencies, ensuring their protection and coexistence with human habitats.</p>
                            <Row><Col><h4>Heatmap of Intrusions</h4></Col><Col xs={1}><BsPinMap/></Col></Row>
                            <p>We have harnessed the power of cutting-edge algorithms to precisely identify and analyze elephant frequencies, ensuring their protection and coexistence with human habitats.</p>                            
                            <Row><Col><h4>Improve Crop Safety</h4></Col><Col xs={1}><BsTree/></Col></Row>
                            <p>We have harnessed the power of cutting-edge algorithms to precisely identify and analyze elephant frequencies, ensuring their protection and coexistence with human habitats.</p>
                            <Row><Col><h4>Identify prime times and locations</h4></Col><Col xs={1}><BsClock/></Col></Row>
                            <p>We have harnessed the power of cutting-edge algorithms to precisely identify and analyze elephant frequencies, ensuring their protection and coexistence with human habitats.</p>
                            <Row><Col><h4>Peace of mind of employees</h4></Col><Col xs={1}><BsPeople/></Col></Row>
                            <p>We have harnessed the power of cutting-edge algorithms to precisely identify and analyze elephant frequencies, ensuring their protection and coexistence with human habitats.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="p-5">
                <Container>
                <p>Discover the true meaning of peace of mind as we proudly present a solution to reduce elephant conflict, revolutionizing the way we protect what matters most.</p>
                <Link to="/quote" class="btn btn-outline-success btn-lg" style={{color:"#C8CB26"}}>Request A Quoute</Link>
                </Container>
            </section>
        </div>
    );
}

export default Features;