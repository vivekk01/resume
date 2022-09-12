import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';


function Navbarr() {
  <meta name = "viewport" content="width=device-width, initial-scale=1.0" />
  const navigate = ()=>{
    window.open('//almabetter.com');
  }
  return (
    <>
      <div className="Nav-shadow">
      <Navbar bg="light" variant="light" className='shadow'>
        <Container>
          <Navbar.Brand> <img className ='alma' src="https://cdn-images-1.medium.com/max/866/1*QNPtTTF_g3fTvt39XcCxnw@2x.png" alt="AlmaBetter" width="130" height="30"  onClick={navigate}/></Navbar.Brand>
          <div ml='6' fixed='top' >
          <Nav className="me-auto">
            <NavLink to='/' style={{color:'blue'}} className='nav-links' >Resume Templates</NavLink>
            <NavLink onClick={()=>alert('Oops! No resume found!')} to='/'  className='nav-links' >My Resumes</NavLink>
            <NavLink to='/aboutus'   className='nav-links' >About Us</NavLink>
           </Nav>
          </div>
        </Container>
      </Navbar>
      <br />
      </div>
      
    </>
  );
}

export default Navbarr;
    