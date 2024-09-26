import {Container} from "react-bootstrap";
import pic1 from "../Components/Images/Elephant 3.png";
import pic2 from "../Components/Images/Search Team.jpg";

function AboutUs (){
    return(
        <div>

            {/* Title */}
            <section className="p-5">
                <Container style={{textAlign:"left"}}>
                <h1>About Us at WildTech<span style={{color:"#C8CB26"}}>Alert</span></h1>
                <p>Trusted and Utilized by 15 Plantations and Villages in Malaysia</p>
                </Container>
            </section>

            {/* Aims */}
            <section className="px-5">
                <h3 style={{textAlign:"right"}} className="px-5">Our Aims</h3>
                <div className="px-3">
                    <div className="d-lg-flex">
                        <img src={pic1} alt="An elephant" className="img-fluid w-50"/>
                        <div className="px-4" style={{textAlign:"right"}}>
                            <p>Welcome to WildTechAlert! We are a pioneering company dedicated to providing innovative solutions for early warning detection systems to mitigate wildlife intrusions into plantations and villages. Our mission is to protect both human communities and wildlife by developing advanced technologies that enable early detection and timely response to potential conflicts.
In regions like Malaysia, where human-wildlife interactions are prevalent, it is crucial to find sustainable solutions that balance conservation efforts with the needs of local communities. At WildTechAlert, we understand the challenges faced by plantation owners and villagers when it comes to wildlife intrusions, particularly from species like the Asian elephant (Elephas maximus).
Our team at WildTechAlert comprises a diverse group of experts, including wildlife biologists, engineers, and data scientists, who work tirelessly to develop cutting-edge early warning systems. By harnessing the power of technology, such as motion sensors, acoustic monitoring, and real-time data analysis, we provide reliable alerts and actionable insights to mitigate conflicts and promote coexistence.
We collaborate closely with local communities, government agencies, and conservation organizations to ensure our solutions are tailored to the specific needs and challenges of each area. Our aim is to empower stakeholders with the tools and knowledge necessary to make informed decisions regarding human-wildlife conflict management.
At WildTechAlert, we are passionate about preserving biodiversity and fostering harmonious relationships between humans and wildlife. 
Join us in our mission to create a safer and more sustainable future for both communities and the natural world.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="p-5">
                <h3 style={{textAlign:"left"}} className="px-5">Our Team</h3>
                <div className="px-3">
                    <div className="d-lg-flex">
                        <p>Welcome to WildTechAlert! We are a pioneering company dedicated to providing innovative solutions for early warning detection systems to mitigate wildlife intrusions into plantations and villages. Our mission is to protect both human communities and wildlife by developing advanced technologies that enable early detection and timely response to potential conflicts.
In regions like Malaysia, where human-wildlife interactions are prevalent, it is crucial to find sustainable solutions that balance conservation efforts with the needs of local communities. At WildTechAlert, we understand the challenges faced by plantation owners and villagers when it comes to wildlife intrusions, particularly from species like the Asian elephant (Elephas maximus).</p>
                        <div className="px-4" style={{textAlign:"left"}}>
                            <img src={pic2} alt="An elephant" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;