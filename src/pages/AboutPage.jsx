import { Container, Row, Col } from "react-bootstrap"


const AboutPage = () => {
  return (
    <div className="AboutPage">
      <div className="about min-vh-50">
        <Container>
          <Row>
            <Col className="animate__animated animate__fadeInUp ">
              <h1 className="fw-bold text-center ">About Peternakan</h1>
              <p className="text-center pt-4">Beji Kulon memiliki banyak UMKM, salah satunya adalah peternakan ayam petelur. Kualitas dari telurnya baik dan bergizi untuk dikonsumsi. Dibawah ini adalah dokumentasi untuk ayam petelur di Beji Kulon :</p>
            </Col>
          </Row>
          <Row className="ratio ratio-16x9 align-items-center animate__animated animate__fadeInUp ">
            <iframe src="https://www.youtube.com/embed/PqLuP9T8MrE" 
            title="Youtube Video" 
            allowFullScreen></iframe>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default AboutPage