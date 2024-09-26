import { Button, Modal, Form } from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai';

function Card(props) {

    return(props.add)?(
        <Modal show={props.add} centered>
            <Modal.Header>
                <Modal.Title>Add Card</Modal.Title>
                <Button className='close-btn' onClick={() =>props.setAdd(false)} variant='tertiary'><AiOutlineClose/></Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="addName">
                        <Form.Label>Cardholder Name</Form.Label>
                        <Form.Control type="text" placeholder="Jane Doe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="number" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="expiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="date" placeholder="MM/YY" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cardCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="number" placeholder="CVV" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addLocation">
                        <Form.Label>Billing Address</Form.Label>
                        <Form.Control type="text" placeholder="Town A, Country B" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="number" placeholder="0000" />
                    </Form.Group>
                    <Button variant='secondary' type='submit' onClick={() => props.setLogged(true)}>Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    ):"";
}

export default Card;