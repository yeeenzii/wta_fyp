import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import Team from './Team';

function MemberAdd(props) {

    const [role, setRole] = useState("Owner");
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Prepare data to send
        const data = {
          username: name,
          email: email,
          role: role,
          password: password
        };
    
        try {
          // Send POST request using Fetch API
          const response = await fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
    
          // Handle successful response
          if (response.ok) {
            const responseData = await response.json();
            setMessage(responseData.message); // Assuming backend sends a message
            setName(''); // Clear form after success
            setEmail('');
            setEmail('');
            console.log('data sent')
            history.pushState('/client/team')
          } else {
            throw new Error('Failed to submit data');
          }
        } catch (error) {
          // Handle errors
          console.error('Error submitting data:', error);
          setMessage('An error occurred. Please try again.');
        }
      };

    return(props.add)?(
        <Modal show={props.add} centered>
            <Modal.Header>
                <Modal.Title>Add Member</Modal.Title>
                <Button className='close-btn' onClick={() =>props.setAdd(false)} variant='tertiary'><AiOutlineClose/></Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="addName">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control type="text" placeholder="Jane Doe" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addEmail">
                        <Form.Label htmlFor="email">Email address</Form.Label>
                        <Form.Control type="email" placeholder="email@email.com" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addPassword">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control type="pswd" placeholder="123456" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Role</Form.Label ><br/>
                        <input type="radio" id="owner" name="owner" value={"Owner"} checked={role === "Owner"} onChange={(e) => setRole(e.target.value)} />
                        <label className="px-3" htmlFor="owner">Owner</label>
                        <input type="radio" id="manager" name="manager" value={"Manager"} checked={role === "Manager"} onChange={(e) => setRole(e.target.value)} />
                        <label className="px-3" htmlFor="manager">Manager</label>
                    </Form.Group>
                    <Button variant='secondary' type='submit' onClick={handleSubmit}>Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    ):"";
}

export default MemberAdd;