import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Image from '../components/Image';
import './style.css'

// Photos
import headshot from '../assets/images/profile-pic.jpg'
import hero from '../assets/images/02-hero-bg.jpg'


function About() {
  return (
    <div>
      <Hero backgroundImage={hero}>
        <Container>
          <Row>
            <h1 style={{ padding:1 }}>Clive Makong'o</h1>
            <div style={{ display: 'flex', justifyContent: 'center'}} >
              <Col size="md-3 sm-12">
                <img class="about col-sm-12" id="about-me-pic" src="https://github.com/Clive-Makongo/portfolio2/blob/main/assets/images/profile-pic.jpg?raw=true" />
            </Col>
            </div>
            <h2>Front End Web Developer</h2>
          </Row>
        </Container>   
      </Hero>
      <br /> <p className='col-sm-12'>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default About;
