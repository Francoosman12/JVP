import { Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import MySlider from "../components/Slider"
import "../css/home.css";
import GroupCard from "../components/card-example";
import Sucursales from "../components/sucursales";


const HomeScreen = () => {
  return (
    <>
      <header className="home">
        <Row className="d-xl-flex d-md-block d-sm-block mt-2 w-100 animate__animated animate__fadeInDown p-3 justify-content-center">
          <Col className="col-lg-6 col-sm-12 col-md-12 header-1 text-center p-3">
            <h1 className="p-2 title-home">Jose v. Paoletti</h1>
            <div className="mt-5 p-4">
              <p class="description mt-2">¡Bienvenidos a la distribuidora de mercadería líder en calidad y servicio!</p>
              <p class="description mt-2">Ofrecemos una amplia gama de productos de primera calidad para satisfacer tus necesidades comerciales. Nuestro compromiso con la excelencia y la entrega puntual nos ha convertido en la opción preferida de numerosos clientes en todo el país.</p>
            </div>

            <Button href="https://puntodeventa.tiendapropio.com/search" variant="success" className="mt-2">¡Descubre aquí nuestras Ofertas!</Button>
          </Col>
          <Col className="col-lg-6 col-sm-12 col-md-12 header-2 p-3 text-center">
            <h1 className="text-center p-2 title-home">Nuestras Sucursales</h1>
            <Sucursales />
          </Col>
        </Row>
      </header>
      <section className="m-5 animate__animated animate__fadeInDown">
        <Row className='d-flex justify-content-center align-items-center'>
          <Col className='col-10'>
            <GroupCard />
          </Col>
        </Row>

      </section>
      <section className="section-1 m-3">
        <Row className="d-flex text-center">
          <Col className="mt-4">
            <h1 className="title-section">Grupo Paoletti</h1>
            <br />
            <p className="title-section">Te ofrecemos una variedad de productos de diferentes proveedores, con un servicio de logística puerta a puerta.</p>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <CardGroup className="justify-content-center aling-items-center m-5">
              <Card className="m-2 text-center card">
                <Card.Body>
                  <Card.Title className="title-section"></Card.Title>
                  <img className="logo-section-2" src="https://i.ibb.co/GdhXk5R/logo-jvp.png" alt="" />
                  <hr />
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi. Tempora ab saepe voluptas officia quam sapiente, itaque laudantium, qui ipsum voluptates culpa delectus. Hic doloremque autem natus dicta. Voluptatem.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="m-2 text-center card">
                <Card.Body>
                  <Card.Title className="title-section"></Card.Title>
                  <img className="logo-section-2" src="https://i.ibb.co/C2hLxJ8/Logo-PDV-removebg-preview.png" alt="" />
                  <hr />
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi. Tempora ab saepe voluptas officia quam sapiente, itaque laudantium, qui ipsum voluptates culpa delectus. Hic doloremque autem natus dicta. Voluptatem.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="m-2 text-center card">
                <Card.Body>
                  <Card.Title className="title-section"></Card.Title>
                  <img className="logo-section-2 mt-3" src="https://i.ibb.co/TmSRPVg/logo-dts-removebg-preview.png" alt="" />
                  <hr />
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi. Tempora ab saepe voluptas officia quam sapiente, itaque laudantium, qui ipsum voluptates culpa delectus. Hic doloremque autem natus dicta. Voluptatem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <Row className="d-flex justify-content-center aling-items-center m-5">
              <Col className="col-10">
                <MySlider />
              </Col>
            </Row>


          </Col>
        </Row>
      </section>
      <section>

      </section>

    </>

  );
};

export default HomeScreen;
