import { Container, Table, Card } from "react-bootstrap";

function Clients(){
    return(
        <div>
            {/* Requests */}
            <section>
                <Container className="pt-5">
                    <h5 style={{textAlign:"left"}}>Requests</h5>

                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Space</th>
                                <th>Quotation Progress</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Mark Lorden</td>
                                <td>mark.lord@outlook.com</td>
                                <td>3km2</td>
                                <td>Uncontacted</td>
                            </tr>
                            <tr>
                                <td>Safa Yousif</td>
                                <td>safa.yousif@outlook.com</td>
                                <td>3km2</td>
                                <td>In Negotations</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </section>

            {/* existing Clients */}
            <section>
                <Container className="pt-5">
                    <Card>
                        <Card.Header>
                            <p style={{textAlign:"left"}}>M Plantation</p>
                            <p style={{textAlign:"right"}}>B34, 43500 Semenyih, Selangor</p>
                        </Card.Header>
                        <Card.Body style={{textAlign:"left"}}>
                            <p>Mark Lorden          mark.lord@outlook.gom</p>
                            <p>Plantation size 12km²</p>
                            <p>Beacon quantity 3</p>
                        </Card.Body>
                        <Card.Footer>
                            <p style={{textAlign:"left"}}>Next maintenance planned in June 3 2024</p>
                            <a href="/" style={{textAlign:"right"}}>View Heatmap</a>
                        </Card.Footer>
                    </Card>
                </Container>
            </section>
        </div>
    );
}

export default Clients;