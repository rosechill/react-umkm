import { Container, Row, Col } from "react-bootstrap"
import MujiPhoto from "../assets/img/muji.jpeg"

const ContactPage = () => {
  return (
    <div className="contactpage">
      <Container>
        <Row>
          <Col className="animate__animated animate__fadeInUp ">
            <h1 className="fw-bold text-center pt-5">Contact Person</h1>
          </Col>
        </Row>
        <Row className="pb-4 px-5">
          <Col className="d-flex justify-content-center align-items-center">
               <img src={MujiPhoto} className="rounded animate__animated animate__fadeInUp" />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="d-flex justify-content-center align-items-center">
          <div className="muji ">
              <i className="fa-regular fa-user fw-bold"></i>
              <p className="fw-bold m-0"> Muji Bahroman</p>
            </div>

            <div className="mujino">
              <i className="fa-brands fa-whatsapp fw-bold"></i>
              <p className="fw-bold m-0"> 089510132626</p>
            </div>
          </Col>
          
        </Row>
        {/* <Row>
        <Col></Col>
          <Col className=" ">
          <img src={MujiPhoto} className="rounded animate__animated animate__fadeInLeft" />
          </Col>
          <Col className="kontak col-lg-2 col mt-lg-0">
          <div className="muji ">
              <i className="fa-regular fa-user fw-bold"></i>
              <p className="fw-bold m-0"> Muji Bahroman</p>
            </div>

            <div className="mujino">
              <i className="fa-brands fa-whatsapp fw-bold"></i>
              <p className="fw-bold m-0"> 089510132626</p>
            </div>
          </Col>
          <Col></Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default ContactPage