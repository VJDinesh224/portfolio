import React from 'react';
import Drinker1 from './Drinker1.png';
import portfolio from './Portfolio.png';
import Qually from './Qually.png';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container className="mt-5" id='projects'>
      <h1 className="mb-5">My Projects</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={Drinker1} />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                Description of Project 1
              </Card.Text>
              <a href='https://github/drinker'><Button variant="dark">View Details</Button></a>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={Qually} />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Description of Project 2
              </Card.Text>
              <a href='https://github/qually'><Button variant="dark">View Details</Button></a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={portfolio}/>
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Description of Project 3
              </Card.Text>
              <a href='https://github/portfolio'><Button variant="dark">View Details</Button></a>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
  