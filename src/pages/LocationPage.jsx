import { Container, Row, Col } from "react-bootstrap"

const LocationPage = () => {
  return (
    <div className="locationpage">
      <Container>
        <Row className="animate__animated animate__fadeInUp animate__delay-1s">
          <Col className="text-center">
            <h1 className="fw-bold  py-5 ">Google Maps Location</h1>
            <p className="text-center">
              Silahkan klik Google Maps-nya
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.1498450334543!2d110.28098391477873!3d-7.879385894323325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTInNDUuOCJTIDExMMKwMTYnNTkuNCJF!5e0!3m2!1sid!2sid!4v1690161881149!5m2!1sid!2sid"
              width="100%"
              height="450px"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="maps animate__animated animate__fadeInUp animate__delay-1s">
            </iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LocationPage