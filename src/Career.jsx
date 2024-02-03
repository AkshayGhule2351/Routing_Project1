import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Career= () => {
  const Backgroundset = {
    backgroundColor: 'aqua',
    marginTop: '10px'
  };
  const color={
    color:"red"
  }
  const color1={
    color:"blue"
  }
  return (
    <>
    <Container >
      <Row className="justify-content-center " >
        <Col md={8}>
          <Card style={Backgroundset} >
            <Card.Body>
              <Card.Title style={color}>Carrier Opportunities</Card.Title>
              <Card.Text>
                We have various exciting career opportunities available at our company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
              </Card.Text>
              <Card.Text>
                <strong style={color}>Open Positions:</strong>
                <ol style={color1} >
                  <li>Software Engineer</li>
                  <li>Marketing Specialist</li>
                  <li>Financial Analyst</li>
                  <li>Web Developer</li>
                </ol>
                <p>To apply, please send your resume to <a href="/login"> IEC@carrier.com.</a> </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
   
   
    </>
  );
};

export default Career;
