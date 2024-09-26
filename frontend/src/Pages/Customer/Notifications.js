import { Button, Modal } from 'react-bootstrap';
import './Notifications.css';
import {AiOutlineClose} from 'react-icons/ai';
import { useState,useEffect } from 'react'
import NotiList from '../Components/Db_stuff/NotificationsList';

function Notifications(props) {

    const [nots, setNots] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5555/detections');
            if (!response.ok) {
              throw new Error(`Error fetching users: ${response.status}`);
            }
            const data = await response.json();
            setNots(data);
            console.log('records set')
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchData();
      }, []);

    return(props.trigger)?(
        <Modal show={props.trigger} centered>
            <Modal.Header>
                <Modal.Title>Notifications</Modal.Title>
                <Button className='close-btn' onClick={() =>props.setTrigger(false)} variant='tertiary'><AiOutlineClose/></Button>
            </Modal.Header>
            <Modal.Body>
                <NotiList nots={nots}/>
            </Modal.Body>
        </Modal>
    ):"";
}

export default Notifications;