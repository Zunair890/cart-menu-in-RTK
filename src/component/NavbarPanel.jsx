
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarPanel() {
  const cartProduct= useSelector(state=>state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid className="text-xl">
      <Navbar.Brand href="#" className='font-semibold'>Redux Toolkit</Navbar.Brand>
      <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-end pr-7'>
          <Navbar.Text>
          <Nav.Link to="/cart" as={Link}>View Cart <span className='border-2 px-2 py-1 rounded-md border-gray-400'>{cartProduct.length}</span></Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
          
     
    </Container>
  </Navbar>

  )
}

export default NavbarPanel