import { Card, Col, Container, Row } from "react-bootstrap";
import { useState,useEffect } from 'react'
import RecordsList from "../Components/Db_stuff/RecordsList";

function Records(){
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5555/maintenace');
            if (!response.ok) {
              throw new Error(`Error fetching users: ${response.status}`);
            }
            const data = await response.json();
            setRecords(data);
            console.log('records set')
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchData();
      }, []);

    return(
        <div>
            {/* Title */}
            <section>
                <Container><h5 className="pt-5" style={{textAlign:"left"}}>Planned Maintanence</h5></Container>
            </section>

            {/* Maintanence Cards */}
            <section>
                <Container>
                    <Col className='d-flex flex-lg-column'>
                        {/* <div > */}
                            <RecordsList records={records}/>
                        {/* </div> */}
                    </Col>
                </Container>
            </section>
        </div>
    );
}

export default Records;