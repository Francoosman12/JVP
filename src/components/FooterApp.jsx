import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "../css/footer.css"

const FooterApp = () => {
  return (
    <footer className="position-relative bottom-0 w-100 mt-5">
      <div className="footer py-4">
        <Container>
          <Row>
            <Col md={4} className="m-footer">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="d-none d-lg-block fw-light">
                  José V. Paoletti
                </span>
              </div>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column align-items-center justify-content-center m-footer"
            >
              <h6>Seguinos en</h6>
              <div className="d-flex justify-content-between">
                <Nav.Link
                  href="https://www.instagram.com/paoletti/"
                  target="_blank"
                >
                  <i className="bi bi-instagram text-cyan mx-2"></i>
                </Nav.Link>
                <Nav.Link
                  href="https://twitter.com/paoletti"
                  target="_blank"
                >
                  <i className="bi bi-twitter text-cyan mx-2"></i>
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/profile.php?id=100093740438104&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <i className="bi bi-facebook text-cyan mx-2"></i>
                </Nav.Link>
              </div>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h6>Contacto</h6>
              <a
                href="https://wa.me/+1111111111"
                target="_blank"
                className="d-flex text-decoration-none mt-1"
              >
                <i className="bi bi bi-whatsapp text-cyan me-2"></i>
                <p>+541111111111</p>
              </a>
              <a
                href="tel:+543812326414"
                className="d-flex text-decoration-none"
              >
                <i className="bi bi-telephone text-cyan me-2"></i>
                <p>+5431111111111111111111</p>
              </a>
              <a
                href="mailto:fedraargentina@gmail.com"
                className="d-flex text-decoration-none"
              >
                <i className="bi bi-envelope-at text-cyan me-2"></i>
                <p>paoletti@gmail.com</p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center copyright">
        <h6 className="text-cyan">© Desarrollado por Osmán, Franco - 2023</h6>
      </div>
    </footer>
  );
};

export default FooterApp;
