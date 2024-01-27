import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Image from '../components/Image';

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Clive Makong'o</h1>
        <Container>
          <Row>
            <div style={{ display: 'flex', justifyContent: 'center'}} >
              <Col size="md-3">
                <Image src="https://www.facebook.com/photo/?fbid=10220408155129671&set=a.1549974745020"/>
            </Col>
            </div>
            
          </Row>
        </Container>
        <h2>Front End Web Developer</h2>
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
