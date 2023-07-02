import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar expand="md" >
        <Container>
          <Navbar.Brand href="/">
        
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
          
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
               
              </div>

              <button className="vvd"><span>Let’s Connect</span></button>
            
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}