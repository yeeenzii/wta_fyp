import './Login.css'
import {AiOutlineClose} from 'react-icons/ai';
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import BasePage from '../Customer/BasePage';
import { Link } from 'react-router-dom';

function Login(props){
    const [log, setLog] = useState(false);
    
    return (props.trigger) ? (
        <>
            <Modal show={props.trigger}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                    <Button className='close-btn' onClick={() =>props.setTrigger(false)} variant='tertiary'><AiOutlineClose/></Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="email@email.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <a href='/'>Reset Password</a>
                        <Link to="client/overview" className="btn btn-outline-success">Submit</Link>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Private Route */}
            <BasePage logged={log} setLogged={setLog}/>
        </>    
    ): "";
}

export default Login;