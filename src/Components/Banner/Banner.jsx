import {Button, Card} from 'react-bootstrap'
import './Banner.css'
function Banners(){
    return(
        <Card className='banner border-0'>
            <Card.Body>
                <Card.Title>Album Example</Card.Title>
                <Card.Text>
                Something short and leading about the collection below -its
                contents, the creators, etc. Make it short and sweet, but not
                too shortso folks don't simply skip over it entirely.
                </Card.Text>
                <Button variant="primary">Main call to action</Button>
                <Button variant="secondary">Secondary action</Button>
            </Card.Body>
        </Card>
    )
}
export default Banners;