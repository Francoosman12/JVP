import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupCard() {
    return (
        <CardGroup className='text-center'>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>ENVIO GRATIS</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>$ PAGO EN EFECTIVO</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default GroupCard;