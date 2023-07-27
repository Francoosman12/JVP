import { Row, Col, Card, CardGroup, Button, Form, Accordion, Image } from "react-bootstrap";
import MySlider from "../components/Slider"
import "../css/home.css";
import GroupCard from "../components/card-example";
import Sucursales from "../components/sucursales";


const HomeScreen = () => {
  return (
    <>
      <header className="home p-2 w-100">
        <Row className="w-100 animate__animated animate__fadeInDown p-3 justify-content-center align-items-center">
          <Col className="col-lg-10 header-1 text-center p-3">
            <h1 className="p-2">Jose V. Paoletti</h1>
            <div className="mt-3 p-4">
              <p class="description mt-2">¡Bienvenidos a la distribuidora de mercadería líder en calidad y servicio!</p>
              <p class="description mt-2 p-4">Ofrecemos una amplia gama de productos de primera calidad para satisfacer tus necesidades comerciales. Nuestro compromiso con la excelencia y la entrega puntual nos ha convertido en la opción preferida de numerosos clientes en todo el país.</p>
            </div>

            <Button href="https://puntodeventa.tiendapropio.com/search" variant="success" className="mt-2">¡Descubre aquí nuestras Ofertas!</Button>
          </Col>
          <Col className="col-lg-10 col-sm-12 col-md-12 header-2 p-3 text-center mt-5">
            <h1 className="text-center p-2 title-home">Nuestras Sucursales</h1>
            <Sucursales />
          </Col>
        </Row>
      </header>
      <section className="m-5 animate__animated animate__fadeInDown" >
        <Row className='d-flex justify-content-center align-items-center'>
          <Col className='col-10'>
            <GroupCard />
          </Col>
        </Row>

      </section>
      <section className="grupo-paoletti m-3">
        <Row className="d-xl-flex d-md-block d-sm-block text-center justify-content-center align-items-center w-100 p-5">
          <Col className="col-lg-6 col-12">
            <h1 className="title-section">GRUPO PAOLETTI</h1>
            <p>Te ofrecemos una variedad de productos de diferentes proveedores, con un servicio de logística puerta a puerta.</p>
          </Col>
          <Col className="col-lg-6 col-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>José V. Paoletti</Accordion.Header>
                <Accordion.Body>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                  <Image src="https://i.ibb.co/GdhXk5R/logo-jvp.png" rounded className="logo" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Punto de Venta</Accordion.Header>
                <Accordion.Body>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                  <Image src="https://i.ibb.co/C2hLxJ8/Logo-PDV-removebg-preview.png" rounded className="logo" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Down To Street</Accordion.Header>
                <Accordion.Body>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                  <Image src="https://i.ibb.co/TmSRPVg/logo-dts-removebg-preview.png" rounded className="logo" />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </section>
      <section className="section-slider m-3">
        <Row className="d-flex justify-content-center aling-items-center">
          <Col className="col-10">
            <MySlider />
          </Col>
        </Row>
      </section>
      <section className="contacto m-3 shadow">
        <Row className="m-1">
          <Col className="col-lg-6 col-sm-12 col-md-10">
            <h1 className="mt-5 title-home p-2 text-center shadow">Contactanos</h1>
            <Form className="mt-5 mb-5 shadow p-5 formulario-contacto">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Ingrese su nombre" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="name" placeholder="Ingrese su apellido" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escriba aquí su mensaje..." />
              </Form.Group>
              <Button className="" variant="danger" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </section>

    </>

  );
};

export default HomeScreen;
