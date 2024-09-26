import { Button, Row, Container, Col, Table} from "react-bootstrap";
import {useEffect,useState} from "react";
import MemberAdd from "./Add Member";
import TeamList from "../Components/Db_stuff/TeamList";
import More from "./More";
import {AiOutlineMore} from "react-icons/ai";

function Team(){

    const [popup, setPopup] = useState(false);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5555/users');
            if (!response.ok) {
              throw new Error(`Error fetching users: ${response.status}`);
            }
            const data = await response.json();
            setMembers(data);
            console.log('records set')
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchData();
      }, []);

    return(
        <div>
            {/* Title Area */}
            <section className="pt-5 pb-2">
                <Container>
                    <Row>
                        <Col><h5 className="d-inline" style={{textAlign:'left'}}>Team</h5></Col>
                        <Col style={{alignItems:"right"}}><Button variant="secondary" onClick={()=> setPopup(true)}>Add Member</Button></Col>
                    </Row>
                </Container>
            </section>

            {/* Table */}
            <section>
                <Container className="pt-5">
                    <Table className="pt-2">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Permission</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <TeamList members={members}/>
                        </tbody>
                    </Table>
                </Container>
            </section>

            <MemberAdd add={popup} setAdd={setPopup}/>

        </div>
    )
}

export default Team;