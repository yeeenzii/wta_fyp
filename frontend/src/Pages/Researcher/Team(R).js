import { Button, Container, Table} from "react-bootstrap";
import {useState, useEffect} from "react";
import More from "./More(R)";
import TeamList from "../Components/Db_stuff/TeamList";
import {AiOutlineMore} from "react-icons/ai";

function TeamR(){

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
                     <h5 style={{textAlign:'left'}}>Team</h5>
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
                                <th>Number</th>
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

        </div>
    )
}

export default TeamR;