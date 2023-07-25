import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer pt-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Beji Kulon</h3>
            <p className="desc">"Kemanapun kami melangkah, pada waktunya kami semua akan
            kembali dan memberikan yang terbaik untuk kemajuan desa kami" </p>
            <p>27 Juli 2023, Universitas Atma Jaya Yogyakarta</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">087839775711</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-user"></i>
                <p className="m-0">Suroto</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold ">Menu</h5>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="location">Location</Link>
          </Col>
          <Col>
          
          </Col>
         
        </Row>
        <Row className="py-5">
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by
              <span className="fw-bold"> Kelompok 33,</span> KKN 83 Universitas Atma Jaya Yogyakarta</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent