import {Container} from "react-bootstrap";
import pic1 from "../Components/Images/aramijaya elephant2.png";

function Support(){
    return(
        <div>
            {/* Title */}
            <section className="p-5">
                <Container style={{textAlign:"left"}}>
                <h1>Support</h1>
                <p>Dedicated support fulfilled within 3 working days</p>
                </Container>
            </section>

            {/* Body */}
            <section className="px-5">
                <div className="px-3">
                    <div className="d-lg-flex">
                        <img src={pic1} alt="An elephant" className="img-fluid w-50"/>
                        <div className="px-4" style={{textAlign:"right"}}>
                            <div>
                                <p>At WildTechAlert, we take pride in offering prompt and reliable support to our valued customers. Our dedicated support team is committed to providing swift assistance to address any queries or concerns you may have within three working days.</p>
                            </div>

                            <div className="pt-4">
                                <h3>Contact Support</h3>
                                <p>At WildTechAlert, we take pride in offering prompt and reliable support to our valued customers. Our dedicated support team is committed to providing swift assistance to address any queries or concerns you may have within three working days.</p>
                                <ol>
                                    <li>Email Support: For any inquiries or assistance, please email our support team at support@wildtechalert.com. We strive to respond to all emails within three working days.</li>
                                    <li>Online Support Form: Alternatively, you can visit our website and fill out the support form located on the Support page. Provide as much detail as possible, and our team will promptly review your request and respond accordingly.</li>
                                </ol>
                            </div>

                            <div className="pt-4">
                                <h3>Support Process</h3>
                                <ol>
                                    <li>Ticket Creation: Upon receiving your inquiry or concern, our support team will create a support ticket to track the progress of your request.</li>
                                    <li>Analysis and Resolution: Our team of experts will diligently analyze your query and work towards finding a solution or providing the necessary guidance.</li>
                                    <li>Timely Response: We understand the importance of timely assistance. Our support team will strive to respond to your ticket within three working days, keeping you informed of the progress throughout the process.</li>
                                    <li>Resolution and Follow-up: Once a resolution or guidance has been provided, we will follow up with you to ensure that your issue has been adequately addressed and your satisfaction has been achieved.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="p-5">
                <p>We value your feedback and continually strive to improve our support services. If you have any suggestions or comments regarding your support experience, please feel free to share them with us. Thank you for choosing WildTechAlert. We are here to assist you and provide the support you need to effectively manage wildlife intrusions and ensure the safety of your community and the surrounding wildlife</p>
            </section>
        </div>
    );
}

export default Support;