import React from 'react';
import {Container, Row,  Col} from 'react-bootstrap';
 import './Footer.css';

const Footer = () => {
  return (
      <div>
      <footer className='footer'>
        <Container>
          <Row>
            <Col className='text-center py-3'>Copyright &copy; Michelle Owsley</Col>
          </Row>
        </Container>
      </footer>
      </div>
  )
}
export default Footer;
