import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Image from '../components/Image';

// Photos
import headshot from '../assets/images/profile-pic.jpg'
import hero from '../assets/images/02-hero-bg.jpg'


function About() {
  return (
    <div>
      <Hero backgroundImage={hero}>
        <h1 style={{padding:30}}>Clive Makong'o</h1>
        <Container>
          <Row>
            <div style={{ display: 'flex', justifyContent: 'center'}} >
              <Col size="md-3">
                <Image src="https://github.com/Clive-Makongo/portfolio2/blob/main/assets/images/profile-pic.jpg?raw=true" />
            </Col>
            </div>
          </Row>
        </Container>
        <h2 style={{ padding: 30 }}>Front End Web Developer</h2>
      </Hero>
      <h1>Clive Makong'o</h1>
      <p>
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
