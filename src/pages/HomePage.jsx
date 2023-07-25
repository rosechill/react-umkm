import { Container, Row, Col } from "react-bootstrap"
import AyamImage from "../assets/img/ayam.png"
import paksuroto from "../assets/img/pak-suroto.png"
import { aboutTernak } from "../data/index"
import FaqComponent from "../components/FaqComponent"
import { useNavigate } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


// import required modules
import { Pagination } from 'swiper/modules'

const Homepage = () => {
  let navigate = useNavigate()

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                UMKM <br /> <span> Peternakan Ayam Petelur</span> <br />
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">"Telur dihasilkan dari ayam yang dipelihara dengan standar tinggi, tanpa hormon atau antibiotik. Memberikan Anda kualitas dan rasa yang alami."</p>
              <button className="btn btn-danger btn-lg-rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s " onClick={() => navigate("/location")}>Dimana lokasinya ?</button>
              <button className="btn btn-outline-danger btn-lg-rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/about")}>Lihat video sekarang !</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={AyamImage} className="animate__animated animate__fadeInRight" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="about" py-5>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Dokumentasi</h1>
            </Col>
          </Row>
          <Row data-aos="fade-up" data-aos-duration="1000">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {aboutTernak.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow">
                    <div>
                      <img src={data.image} />
                    </div>
                  </SwiperSlide>
                )
              })}

            </Swiper>
          </Row>
          <div className="text-center">
            <Col>
              <button className="btn btn-danger btn-lg-rounded-1 mb-xs-0 mb-2 my-4" onClick={() => navigate("/about")}> Video Dokumentasi</button>
            </Col>
          </div>
          <Row className="mb-xs-0 text-center ">
            <Col></Col>
            <Col >
              <h1 className="text-center fw-bold my-5 ">Poster</h1>
              <div><img src={paksuroto} data-aos="fade-up" data-aos-duration="1000"/></div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      {/* Faq Component */}
      <FaqComponent />
      {/* Faq Component */}
    </div>
  )
}

export default Homepage