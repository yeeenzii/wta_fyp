import {Button, Modal} from "react-bootstrap";
import {AiOutlineClose} from 'react-icons/ai';

function More(props){
    return(props.trigger) ? (
        <div>
            <Modal show={props.trigger}>
                <Modal.Header>
                    <Modal.Title>More</Modal.Title>
                    <Button className='close-btn' onClick={() =>props.setTrigger(false)} variant='tertiary'><AiOutlineClose/></Button>
                </Modal.Header>
                <Modal.Body>
                    <Button>Delete</Button>
                </Modal.Body>
            </Modal>
        </div>
    ):"";
}

export default More;