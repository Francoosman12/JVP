import { Row, Col, Card, CardGroup, } from "react-bootstrap";
import MySlider from "../components/Slider"
import "../css/home.css";


const HomeScreen = () => {
  return (
    <>
      <header className="home">
        <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center mt-5 w-100">
          <Col className="col-lg-6"></Col>
          <Col className="p-5 col-xl-6 col-12 header-1 text-center p-5">
            <h1>Jose v. Paoletti</h1>
            <p class="description">¡Bienvenidos a la distribuidora de mercadería líder en calidad y servicio!</p>
            <p class="description">Ofrecemos una amplia gama de productos de primera calidad para satisfacer tus necesidades comerciales. Nuestro compromiso con la excelencia y la entrega puntual nos ha convertido en la opción preferida de numerosos clientes en todo el país.</p>
            <button class="action-button">¡Descubre nuestras ofertas!</button>
          </Col>
        </Row>
      </header>
      <section className="section-1 mt-5">
        <Row className="d-flex text-center w-100">
          <Col className="mt-4">
            <h1 className="title-section">Grupo Paoletti</h1>
            <br />
            <p className="title-section">Te ofrecemos una variedad de productos de diferentes proveedores, con un servicio de logística puerta a puerta.</p>
          </Col>
        </Row>
        <Row className="w-100">
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
          </Col>
        </Row>
      </section>
      <section>
        {/* <MySlider /> */}
      </section>

    </>

  );
};

export default HomeScreen;
