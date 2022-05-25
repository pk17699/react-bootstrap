import {Card,Button,CardGroup} from 'react-bootstrap'
import './card.css'
function Cards(){
    return(
        <CardGroup className='cardgroup'>
            <Card className='card'>
                <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp2465923.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Button variant="primary">view</Button>
                <Button variant="secondary">edit</Button>
                9 mins
                </Card.Body>
            </Card>
            <Card className='card'>
                <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp2465923.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Button variant="primary">view</Button>
                <Button variant="secondary">edit</Button>
                9 mins
                </Card.Body>
            </Card>
            <Card className='card'>
                <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp2465923.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Button variant="primary">view</Button>
                <Button variant="secondary">edit</Button>
                    9 mins
                </Card.Body>
            </Card>
        </CardGroup>
    )
}
export default Cards;