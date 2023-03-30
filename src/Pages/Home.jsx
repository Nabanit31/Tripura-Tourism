import React from 'react'
import '../styles/home.css'
import { Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/subtitle'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonnyImageGallery from '../components/Image-gallery/MasonnyImageGallery';
import Newsletter from '../shared/Newsletter';





const Home = () => {
  return( <>
  {/*==== hero section start============ */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitile d-flex align-items-center">
              <Subtitle subtitle={'know Before You Go'}/>
              <img src={worldImg} alt=''/>
            </div>
            <h1>Traveling Opens the door to creating {" "}
            <span className='highlight'>memories</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda, excepturi ex mollitia, asperiores suscipit a
            magnam corporis consequatur doloribus eaque rerum nam. Culpa quaerat quidem, labore saepe iusto provident.
            </p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box ">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>
      </Row>
      </Container>
  </section>
  {/*------------hero section------------*/}
<section>
  <Container>
    <Row>
      <Col lg='3'>
        <h5 className="services__subtitles">What we serve</h5>
        <h2 className="services__title">We offer our Best</h2>
      </Col >
      <ServiceList/>
    </Row>
  </Container>
</section>
{/*===============Featured tour section end=================*/}

<section>
  <Container>
    <Row>
      <Col lg="12" className='mb-5'>
        <Subtitle subtitle={'explore'}/>
        <h2 className='featured__tour-title'>Our featured tours</h2>
      </Col>
      <FeaturedTourList/>
    </Row>
  </Container>
</section>

{/*===============gallery section start=================*/}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className="gallery__title">Our Tourist Spots</h2>
      </Col>
      <Col lg='12'>
        <MasonnyImageGallery/>
      </Col>
    </Row>
  </Container>
</section>
{/*===============gallerysection end=================*/}

<Newsletter/>






  </>
  );
}

export default Home