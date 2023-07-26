import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import '../css/card-example.css';

function GroupCard() {
    return (
        <CardGroup className='text-center'>
            <Card>
                <Row className='justify-content-center'>
                    <Card.Img className='img-card w-25' src="https://i.ibb.co/ZVhmKtV/envio.png" />
                    <Card.Body>
                        <Card.Title>ENVIO GRATIS</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>

                </Row>
            </Card>
            <Card>
                <Row className='justify-content-center'>
                    <Card.Img className='img-card w-25' src="https://i.ibb.co/jJZPkn2/efectivo.png" />
                    <Card.Body>
                        <Card.Title>$ PAGO EN EFECTIVO</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Row>
            </Card>
            <Card>
                <Row className='justify-content-center'>
                    <Card.Img className='img-card w-25' src="https://i.ibb.co/tXzyBsw/descuento.png" />
                    <Card.Body>
                        <Card.Title>Nuestras Ofertas</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Row>
            </Card>

        </CardGroup>
    );
}

export default GroupCard;