import {Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
function Footers(){
    return(
        <Navbar bg="light" variant="light">
            <Container>
            <div className='footer-left'>
                Album example is © bootstrap, but please download and customize for yourself<br/>
                New to bootstrap ? visit the homepage or read our getting started guide
            </div>
            <div className='footer-right'>
                Back to top
            </div>
            </Container>
        </Navbar>
    );
}
export default Footers;