import { Button, Container, Card } from "react-bootstrap";
import spectrogram from '../Components/Audio/spectrogram.png';
//import audio from '../Components/Audio/JCL_20230607_182100_ZOOM0002_Jalan Kampung Sri Timur.WAV';
import { useState, useEffect } from "react";
import VerList from "../Components/Db_stuff/VerList";

function Verification(){

    const [vers, setVers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5555/verification');
            if (!response.ok) {
              throw new Error(`Error fetching users: ${response.status}`);
            }
            const data = await response.json();
            setVers(data);
            console.log('verifications set')
          } catch (error) {
            console.error('Error fetching verifications:', error);
          }
        };
    
        fetchData();
      }, []);

    return(
        <div>
            {/* Title */}
            <section><Container><h5 style={{textAlign:"left"}} className="pt-5">Manual Verification</h5></Container></section>

            {/* Spectrogram */}
            <section className="pt-5" style={{textAlign:"center"}}>
            <div className="spectrogram-player">
                <VerList vers ={vers}/>
            </div>
            </section>

            {/* Buttons */}
            <section>
                <Container style={{textAlign:"center"}}>
                    <Button style={{margin:"1rem"}} variant="success" >Valid</Button>
                    <Button style={{margin:"1rem"}} variant="secondary">Invalid</Button>
                </Container>
            </section>

            <link rel="stylesheet" type="text/css" href="spectrogram-player/style.css" />
            <script type="text/javascript" src="spectrogram-player/spectrogram-player.js"></script>
        </div>
    );
}

export default Verification;