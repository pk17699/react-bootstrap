import {Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbars(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Album</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default Navbars;