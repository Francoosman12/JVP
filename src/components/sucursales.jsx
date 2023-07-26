import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row, Col } from 'react-bootstrap';
import Tucuman from './tucuman';
import Catamarca from './catamarca';
import Santiago from './santiago';
import LaRioja from './laRioja';
import '../css/sucursales.css'

function Sucursales() {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"

        >
            <Tab eventKey="home" title="Tucumán">
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col>
                        <p><b>Localidad:</b> Tafí Viejo </p>
                        <p><b>Dirección:</b> Av. Peru 391 </p>
                        <p><b>Teléfono:</b> 0381 461-7761 </p>
                        <p><b>Email:</b> rrhh@josevpaoletti.com.ar </p>

                    </Col>
                    <Col>
                        <Tucuman />
                    </Col>
                </Row>

            </Tab>
            <Tab eventKey="Catamarca" title="Catamarca">
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col>
                        <p><b>Localidad:</b> Catamarca </p>
                        <p><b>Dirección:</b> Av. Peru 391 </p>
                        <p><b>Teléfono:</b> 0381 461-7761 </p>
                        <p><b>Email:</b> rrhh@josevpaoletti.com.ar </p>

                    </Col>
                    <Col>
                        <Catamarca />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="LaRioja" title="La Rioja">
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col>
                        <p><b>Localidad:</b> La Rioja </p>
                        <p><b>Dirección:</b> Av. Peru 391 </p>
                        <p><b>Teléfono:</b> 0381 461-7761 </p>
                        <p><b>Email:</b> rrhh@josevpaoletti.com.ar </p>

                    </Col>
                    <Col>
                        <LaRioja />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="Santiago" title="Santiago del Estero">
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col>
                        <p><b>Localidad:</b> Santiago del Estero </p>
                        <p><b>Dirección:</b> Av. Peru 391 </p>
                        <p><b>Teléfono:</b> 0381 461-7761 </p>
                        <p><b>Email:</b> rrhh@josevpaoletti.com.ar </p>

                    </Col>
                    <Col>
                        <Santiago />
                    </Col>
                </Row>
            </Tab>

        </Tabs>
    );
}

export default Sucursales;