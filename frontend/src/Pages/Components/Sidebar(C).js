import {CDBSidebarMenuItem} from 'cdbreact';
import './Sidebar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsPinMap, BsPeople} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

  function Sidebar(props){
    return (
        <Offcanvas show={props.isOpen} onHide={props.isClose} style={{backgroundColor:"#f0f0f0"}}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <Link to='overview' className='nav-link active'><CDBSidebarMenuItem><AiOutlineHome/>Overview</CDBSidebarMenuItem></Link>
                <Link to='heatmap' className='nav-link active'><CDBSidebarMenuItem><BsPinMap/>Heatmap</CDBSidebarMenuItem></Link>
                <Link to='team' className='nav-link active'><CDBSidebarMenuItem><BsPeople/>Team</CDBSidebarMenuItem></Link>
            </Offcanvas.Body>
        </Offcanvas>
    );
  }

  export default Sidebar;