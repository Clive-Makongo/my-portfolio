import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import SearchForm from '../components/SearchForm';


function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Container className='contacts'>
        <Row>
          <Col className="contacts-col d-flex flex-column align-items-end" size="md-3 sm-12">
            <h2 className='contacts-text'><strong>Email:</strong> <br />clivemakongo@gmail.com</h2>
            <h2 className='contacts-text'> <strong>GitHub</strong>: <br />https://github.com/Clive-Makongo</h2>
            
          </Col>
          <Col className="contacts-col d-flex align-items-end" size="md-3 sm-12">
           <SearchForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
