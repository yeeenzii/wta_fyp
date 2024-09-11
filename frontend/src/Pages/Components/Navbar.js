import {Container, Navbar} from 'react-bootstrap';
import logo from './Images/WTA Logo.png';
import Login from '../Unregistered/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navibar() {
    const [login, setLogin] = useState(false);

  return (
    <>
        <Navbar expand="lg" className="navbar" style={{backgroundColor:"#f0f0f0"}}>
          <Container>
              <Navbar.Brand><Link to="/"><img src={logo} alt='Greenwood Logo' className='w-75' /></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls='nav-components' />

              <Navbar.Collapse id="nav-components">
                  <ul class="navbar-nav me-auto">
                      <li class="nav-item">
                          <Link to="/features" class="nav-link active">Features</Link>
                      </li>

                      <li class="nav-item">
                          <Link to="/about us" class="nav-link active">About Us</Link>
                      </li>
                  </ul>

                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                          <button className="btn" onClick={() => setLogin(true)}>Login</button>
                      </li>

                      <li class="nav-item">
                          <Link to="/support" class="nav-link">Support</Link>
                      </li>

                      <li class="nav-item">
                          <Link to="/quote" class="btn btn-outline-success btn-sm">Get A Quoute</Link>
                      </li>
                  </ul>

              </Navbar.Collapse>

          </Container>
        </Navbar>

        {/* Login Popup */}
        <Login trigger={login} setTrigger={setLogin}/>
    </>
  );
}

export default Navibar;