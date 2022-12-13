import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'


function Navigation() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky='top' >
      <div class = 'container-fluid'>
        <Navbar.Brand><Link class = 'text-decoration-none text-white' to = '/'><h2 className='font-bold hover:text-red-500'>SURGE</h2></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto items-center p-0">
            {/* <Nav.Link><Link class = 'text-decoration-none text-white' to = '/team'><h6 className='hover:text-red-500'>Team</h6></Link></Nav.Link> */}
            <Nav.Link eventKey="1"><Link class = 'text-decoration-none text-white' to = '/facility'><h5 className='hover:text-red-500 font-bold'>Facility</h5></Link></Nav.Link>
            <Nav.Link eventKey="2"><Link class = 'text-decoration-none text-white' to = '/memberships'><h5 className='hover:text-red-500 font-bold'>Memberships</h5></Link></Nav.Link>
            {/* <Nav.Link><Link class = 'text-decoration-none text-white' to = '/coaching'><h5 className='hover:text-red-500 font-bold'>Coaching</h5></Link></Nav.Link> */}
            <Nav.Link eventKey="3"><Link class = 'text-decoration-none text-white' to = '/boxing'><h5 className='hover:text-red-500 font-bold'>Boxing</h5></Link></Nav.Link>
           <Nav.Link eventKey="4"><Link class = 'text-decoration-none text-white' to = '/rhino'><h5 className='hover:text-red-500 font-bold'>Rhino's Revenge</h5></Link></Nav.Link>
            <Nav.Link eventKey="5"><Link class = 'text-decoration-none text-white' to = '/cart'><h5 className='hover:text-red-500 font-bold'><AiOutlineShoppingCart/></h5></Link></Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    
    </>
    
  );
}

export default Navigation;