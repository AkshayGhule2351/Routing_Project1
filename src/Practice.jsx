// import React from 'react';
// import { Image,Button, Carousel, Card, Row, Col, CardHeader } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Practice() {
    // const slideHeight = {
    //     height: '300px',
    //     width: '100%',
    //     objectFit: 'cover',
       
    // };

    // const cardStyle = {
    //     height: 'auto',
    //     width: "100%",
    //     margin: '10px 20px 10px 0',
        
       
    // };

//     return (
        // <div>
        //     <Carousel interval={1500}>
        //     <Carousel.Item>
        //             <Row className="justify-content-around align-items-center">
        //                 <Col md={3} >
        //                     <Card className="text-center" style={cardStyle}>
        //                       <CardHeader>Dress</CardHeader>
        //                         <Card.Img variant="top" src="./img/dress1.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 65% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹1,130</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>

        //                  <Col md={3}>
        //                     <Card className="text-center" style={cardStyle}>
        //                     <CardHeader>Pocket's</CardHeader>
        //                         <Card.Img variant="top" src="./img/dress2.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 35% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹1,299</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>

        //                 <Col md={3}>
        //                     <Card className="text-center" style={cardStyle}>
        //                     <CardHeader>Glasses</CardHeader>
        //                         <Card.Img variant="top" src="./img/dress3.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 55% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹890</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>

        //                 <Col md={3}>
        //                     <Card className="text-center" style={cardStyle}>
        //                     <CardHeader>Watche's</CardHeader>
        //                         <Card.Img variant="top" src="./img/dress4.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 47% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹980</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>

        //             </Row>
        //         </Carousel.Item>




        //         <Carousel.Item>
        //             <Row className="justify-content-around align-items-center">
        //             <Col md={3}>
        //                     <Card className="text-center" style={cardStyle}>
        //                     <CardHeader>Shoe's</CardHeader>
        //                         <Card.Img variant="top" src="./img/dress5.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 73% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹780</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>

        //                 <Col md={3}>
        //                     <Card className="text-center" style={cardStyle}>
        //                     <CardHeader>Tshirt's</CardHeader>
        //                         <Card.Img variant="top" src="./img/dress6.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 63% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹800</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>
        //                 <Col md={3}>
        //                     <Card className="text-center" style={cardStyle}>
        //                     <CardHeader>Women Dress's</CardHeader>
        //                         <Card.Img variant="top" src="./img/dress7.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 79% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹450</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>

        //                 <Col md={3}>
        //                     <Card className="text-center" style={cardStyle}>
        //                     <CardHeader>Sando</CardHeader>
        //                         <Card.Img variant="top" src="./img/fashion2.jpg" />
        //                         <Card.Body>
        //                             <Card.Title>Upto 69% off</Card.Title>    
        //                             <Card.Subtitle className="mb-2 text-muted">₹999</Card.Subtitle>
        //                             <Link to="/signup">
        //                                     <Button variant="primary">Buy Now</Button>
        //                                 </Link>
        //                         </Card.Body> 
        //                     </Card>
        //                 </Col>

        //             </Row>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>
//     )
// }

// export default Practice;


import React from "react";
import Form from "react-bootstrap/Form";
import * as formik from 'formik';
import * as yup from 'yup';
import { Button } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";

function Practice() {
  const { Formik } = formik;
  const schema = yup.object().shape({ 
    firstname: yup.string().required(), 
    lastname: yup.string().required(),
     username: yup.string().required(),
      city: yup.string().required(),
       state: yup.string().required(),
        zip: yup.string().required(), 
        terms: yup.bool().required().oneOf([true], 'Terms must be Accepted') });

  return (
    <Formik validationSchema={schema} onSubmit={console.log} initialValues={{ firstname: '', lastname: '', username: '', city: '', state: '', zip: '', terms: false }}>
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
         <Row>
         <Form.Group as={Col} md="6" controlId="validationFormik01">
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder="Enter First Name" name="firstname" value={values.firstname} onChange={handleChange} isInvalid={!!errors.firstname} />
            <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationFormik02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder="Enter Last Name" name="lastname" value={values.lastname} onChange={handleChange} isInvalid={!!errors.lastname} />
            <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
          </Form.Group>
         </Row>

          
          <Form.Group as={Col} md="6" controlId="validationFormik03">
            <Form.Label>User Name</Form.Label>
            <Form.Control type='text' placeholder="Enter User Name" name="username" value={values.username} onChange={handleChange} isInvalid={!!errors.username} />
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
          </Form.Group>

          <Row>
          <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>City</Form.Label>
            <Form.Control type='text' placeholder="Enter your City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
            <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationFormik05">
            <Form.Label>State</Form.Label>
            <Form.Control type='text' placeholder="Enter your State" name="state" value={values.state} onChange={handleChange} isInvalid={!!errors.state} />
            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationFormik06">
            <Form.Label>zip</Form.Label>
            <Form.Control type='text' placeholder="Enter your city" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
            <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
          </Form.Group>
          </Row>

          

          <Form.Group className="mb-3">
                        <Form.Check required name="terms"
                         label="Agree terms and conditions"
                          onClick={handleChange}
                          isInvalid={!!errors.terms}
                          feedback={errors.terms}
                          feedbackType="invalid"
                          id='validationTerms'
                          />

                          <Button type="submit">Submit</Button>
                          
                        </Form.Group>
        </Form>

        
      )}
    </Formik>
  );
}

export default Practice;



