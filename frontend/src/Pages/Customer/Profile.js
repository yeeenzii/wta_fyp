import { Modal, Button } from "react-bootstrap";
import {AiOutlineClose} from 'react-icons/ai';

function Profile(props){
    return(props.profile)?(
        <Modal show={props.profile} centered>
            <Modal.Header>
                <Modal.Title>User Profile</Modal.Title>
                <Button className='close-btn' onClick={() =>props.setProfile(false)} variant='tertiary'><AiOutlineClose/></Button>
            </Modal.Header>
            <Modal.Body>
                <p>Welcome, Peter</p>
                <p>Role: Manager</p>
                <Button variant="secondary">Logout</Button>
            </Modal.Body>
        </Modal>
    ):"";
}

export default Profile;