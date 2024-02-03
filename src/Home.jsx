import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './home.css';
import Card from "react-bootstrap/Card";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { CardBody, CardGroup, CardText } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardHeader from 'react-bootstrap/CardHeader';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';





function Home() {
    const slideHeight = {
        height: '300px',
        width: '100%',
        objectFit: 'cover',
        margin: '-10px 10px 10px 0',
    };

    const cardStyle = {

        marginTop: '20px',
    };
    const cardStylecard = {
        width: '20rem',
        margin: '10px',
        border: '1px solid black'
    };
    const FashionStyle = {
        width: '100%',
        margin: '10px',
        border: '1px solid black',



    };
    function ProgressBarDemo() {
        const prog = 100;
        return (
            <ProgressBar animated striped variant="secondary" now={prog}></ProgressBar>
            //    if we want to add percentage on striped then uesd now={prog} label={`${prog}%`}
        )
    }
    const slideHeight1 = {
        height: '300px',
        width: '100%',
        objectFit: 'cover',

    };

    const cardStyle1 = {
        height: 'auto',
        width: "100%",
        margin: '10px 20px 10px 0',
    };
    const myh1 = {
        color: 'green'
    };





    return (
        <> 
        <div className='mybody'>
            <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="danger"  sticky="top">
                <Container id='mycontainer'>

                    <Navbar.Brand href="#">
                        <Image src="./Img/akshay.png" alt="Logo" style={{ width: '150px', marginRight: '10px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Navbar.Text>
                            Powered By: <a href="#">UNO, PUNE</a>{" "}
                        </Navbar.Text>
                    </Navbar.Collapse>

                    <Navbar.Collapse >
                        <Nav className="my-nav">
                            <NavDropdown title="Home" id="homeNav">
                                <NavDropdown.Item href="/information"  > Information</NavDropdown.Item>
                                <NavDropdown.Item href="/mobile">Best Mobiles</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#fashion">Fashion</NavDropdown.Item>
                                <NavDropdown.Item href="#">Select all</NavDropdown.Item>
                                <NavDropdown.Item href="#">Information</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">About me</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="View" id="viewNav">
                                <NavDropdown.Item href="#">Information</NavDropdown.Item>
                                <NavDropdown.Item href="#">About me</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Go</NavDropdown.Item>
                                <NavDropdown.Item href="#">Select all</NavDropdown.Item>
                                <NavDropdown.Item href="#">Information</NavDropdown.Item>
                                <NavDropdown.Item href="#">About me</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Go</NavDropdown.Item>
                                <NavDropdown.Item href="#">Select all</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Dashboard" id="dashboardNav">
                                <NavDropdown.Item href="#">Information</NavDropdown.Item>
                                <NavDropdown.Item href="#">About me</NavDropdown.Item>
                                <NavDropdown.Item href="#">Go</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Select all</NavDropdown.Item>
                                <NavDropdown.Item href="#">Information</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">About me</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Selection" id="selectionNav">
                                <NavDropdown.Item href="#">Information</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">About me</NavDropdown.Item>
                                <NavDropdown.Item href="#">Go</NavDropdown.Item>
                                <NavDropdown.Item href="#">Select all</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Information</NavDropdown.Item>
                                <NavDropdown.Item href="#">About me</NavDropdown.Item>
                                <NavDropdown.Item href="#">Go</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Select all</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Form style={{border:'2px solid black', borderRadius: '10px'}} id='search' className="d-flex ms-auto">
                            <FormControl style={{border:'none'}}
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                           <a href="#search"> <Button variant="primary">
                                <FontAwesomeIcon icon={faSearch} />
                            </Button></a>
                        </Form>

                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
            <ProgressBarDemo />

            <div >
                <div >
                    <Carousel interval={1000} >
                        <Carousel.Item>
                            <Image src="./Img/hero11.webp" style={slideHeight} fluid />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src="./Img/hero22.webp" style={slideHeight} fluid />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src="./Img/hero33.webp" style={slideHeight} fluid />
                        </Carousel.Item>
                        <Carousel.Item >
                            <Image src="./Img/hero44.webp" style={slideHeight} fluid />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src="./Img/hero11.webp" style={slideHeight} fluid />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src="./Img/hero22.webp" style={slideHeight} fluid />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src="./Img/f1.webp" style={slideHeight} fluid />
                        </Carousel.Item>
                    </Carousel>
                    {/* Card Start */}

                    <div className='Cardone' id='mobile'>
                        <h3>Best Mobile's</h3>
                        <div>
                            <CardGroup style={cardStyle} >
                                <Card className="text-center" style={cardStylecard}>
                                    <Card.Header>Poco Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/poco.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>POCO F5 5G (Electric Orange, 256 GB)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹26,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>8 GB RAM | 256 GB ROM</li>
                                                <li>16.94 cm (6.67 inch) Full HD+ Display</li>

                                                <li>Dimensity 7050 Processor</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>

                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>iPhone Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/iphone.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>APPLE iPhone 13 (Yellow, 128 GB)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹59,900</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>128 GB ROM</li>
                                                <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                                                <li>A15 Bionic Chip Processor </li>
                                                <li>5000 mAh Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Realme Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/realme.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>realme 11 Pro 5G (Astral Black, 256 GB)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹27,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>12 GB RAM | 256 GB ROM</li>
                                                <li>17.02 cm (6.7 inch) Full HD+ Display</li>
                                                <li>5000 mAh Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Samsung Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/samsung.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>SAMSUNG Galaxy S22 5G</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹39,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>8 GB RAM | 128 GB ROM</li>
                                                <li>15.49 cm (6.1 inch) Full HD+ Display</li>
                                                <li>3700 mAh Lithium-ion Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>

                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Vivo Phone's</Card.Header>
                                    <Card.Img variant="top" src="./img/vivo.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>vivo T2 Pro 5G (Dune Silver, 256 GB)  (8 GB RAM)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹24,999</Card.Subtitle>
                                        <Card.Text>
                                            <ul>
                                                <li>8 GB RAM | 256 GB ROM</li>
                                                <li>17.22 cm (6.78 inch) Full HD+ Display</li>
                                                <li>4600 mAh Battery</li>
                                            </ul>
                                        </Card.Text>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                            </CardGroup>
                        </div>
                    </div>


                    {/* Card Part2 */}



                    <div className='Cardone' id='laptop'>
                        <h3>Best Laptop's</h3>
                        <div>
                            <CardGroup style={cardStyle} >
                                <Card className="text-center" style={cardStylecard}>
                                    <Card.Header>Asus Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/asus.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>ASUS TUF Gaming F15 - AI Powered Gaming Intel Core i5 11th Gen 11260H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/144 Hz/70 W) </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹49,990</Card.Subtitle>

                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>

                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Dell Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/dell.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Platinum Silver, 1.65 Kg, With MS Office)  </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹39,900</Card.Subtitle>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Lenova Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/lenova.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>Lenovo IdeaPad Slim 1 Intel Celeron Dual Core N4020 - (8 GB/256 GB SSD/Windows 11 Home) Dual Core N4020 14IGL7 Thin and Light Laptop  (14 Inch, Cloud Grey, 1.3 Kg, With MS Office)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹19,999</Card.Subtitle>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>Sony Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/sony.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>SONY TUF Gaming F15 with 90WHr Battery  - (Windows 11 / Graphics/NVIDIA GeForce RTX 3050/144 Hz/75 W) FX506HC-HN362W Gaming Laptop  (15.6 Inch, Graphite Black, 2.30 Kg)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">32,990</Card.Subtitle>

                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>

                                <Card className="text-center" style={cardStylecard} >
                                    <Card.Header>HP Laptop's</Card.Header>
                                    <Card.Img variant="top" src="./img/hp.jpg"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>HP Pavilion (2023) Eyesafe AMD Ryzen 5 Hexa Core 5625U - (16 GB/512 GB SSD/Windows 11 Home) 14-EC1019AU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 kg, With MS Office)</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">₹64,999</Card.Subtitle>
                                        <Link to="/signup">
                                            <Button variant="primary">Buy Now</Button>
                                        </Link>
                                    </Card.Body>


                                </Card>
                            </CardGroup>
                        </div>
                    </div>

                </div>

                <>
                    <Row className="justify-content-center align-items-center bg-light " style={FashionStyle} id='fashion'>
                        <h3 className='fashion'>Best Fashion</h3>

                        <Col md={5} className="text-center" style={{ marginRight: '10px ', marginBottom: '10px' }}>
                            <a href="#"><img src="./Img/fashionbig.jpg" alt="Your Image" className="img-fluid" /></a>
                        </Col>



                        <Col md={5} >

                            <Row>
                                <Col>
                                    <a href="#"><img src="./Img/fashion1.jpg" alt="Your Image" className="img-fluid" /></a>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: "18%" }}>
                                <Col>
                                    <a href="/information"> <img src="./Img/fashion2.jpg" alt="Your Image" className="img-fluid" /></a>
                                </Col>
                            </Row>

                        </Col>
                        <div>
                            <Carousel interval={1500}>
                                <Carousel.Item>
                                    <Row className="justify-content-around align-items-center">
                                        <Col md={3} >
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Dress</CardHeader>
                                                <Card.Img variant="top" src="./img/dress1.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 65% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹1,130</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Pocket's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress2.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 35% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹1,299</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Glasses</CardHeader>
                                                <Card.Img variant="top" src="./img/dress3.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 55% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹890</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Watche's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress4.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 47% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹980</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>
                                </Carousel.Item>




                                <Carousel.Item>
                                    <Row className="justify-content-around align-items-center">
                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Shoe's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress5.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}> Upto 73% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹780</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Tshirt's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress6.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 63% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹800</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Women Dress's</CardHeader>
                                                <Card.Img variant="top" src="./img/dress7.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 79% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹450</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col md={3}>
                                            <Card className="text-center" style={cardStyle1}>
                                                <CardHeader>Sando</CardHeader>
                                                <Card.Img variant="top" src="./img/fashion2.jpg" />
                                                <Card.Body>
                                                    <Card.Title style={myh1}>Upto 69% off</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">₹999</Card.Subtitle>
                                                    <Link to="/signup">
                                                        <Button variant="primary">Buy Now</Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Row>
                </>
                {/* //Headphones */}

                <div className='Cardone' id='mobile'>
                    <h3>Best Headphone's</h3>
                    <div>
                        <CardGroup style={cardStyle} >
                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Petron </Card.Header>
                                <Card.Img variant="top" src="./Pics/heaphones6.jpg"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Petron</Card.Title>
                                    <p> truke Clarity 6 with 80Hr Battery, 6Mic Adv.ENC,</p>
                                    <Card.Subtitle className="mb-2 text-muted">₹2,999</Card.Subtitle>
                                    <Card.Text>
                                        <h1 style={myh1}>Min 50% Off</h1>
                                    </Card.Text>
                                    <Link to="/About">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>
                            </Card>

                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Sony </Card.Header>
                                <Card.Img variant="top" src="./Pics/heaphones2.jpg"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Sony</Card.Title>
                                    <p> truke Clarity 6 with 80Hr Battery, 6Mic Adv.ENC,</p>
                                    <Card.Subtitle className="mb-2 text-muted">₹1,999</Card.Subtitle>
                                    <Card.Text>
                                        <h1 style={myh1} >Min 50% Off</h1>
                                    </Card.Text>
                                    <Link to="/About">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>
                            </Card>

                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Boat </Card.Header>
                                <Card.Img variant="top" src="./Pics/heaphones3.jpg"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Boat</Card.Title>
                                    <p> truke Clarity 6 with 80Hr Battery, 6Mic Adv.ENC,</p>
                                    <Card.Subtitle className="mb-2 text-muted">₹ 999</Card.Subtitle>
                                    <Card.Text>
                                        <h1 style={myh1}>Min 50% Off</h1>
                                    </Card.Text>
                                    <Link to="/About">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>
                            </Card>

                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Asus </Card.Header>
                                <Card.Img variant="top" src="./Pics/heaphones5.jpg"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Asus</Card.Title>
                                    <p> truke Clarity 6 with 80Hr Battery, 6Mic Adv.ENC,</p>
                                    <Card.Subtitle className="mb-2 text-muted">₹1,999</Card.Subtitle>
                                    <Card.Text>
                                        <h1 style={myh1}>Min 50% Off</h1>
                                    </Card.Text>
                                    <Link to="/About">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>
                            </Card>

                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Optima</Card.Header>
                                <Card.Img variant="top" src="./Pics/heaphones4.jpg"></Card.Img>
                                <Card.Body>
                                    <Card.Title>Optima</Card.Title>
                                    <p> truke Clarity 6 with 80Hr Battery, 6Mic Adv.ENC,</p>
                                    <Card.Subtitle className="mb-2 text-muted" >₹950</Card.Subtitle>
                                    <Card.Text>
                                        <h1 style={myh1} >Min 50% Off</h1>
                                    </Card.Text>
                                    <Link to="/About">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>

            </div>



            <Footer />

        </>








    );
}
const Footer = () => {
    return (
        <footer className="mt-2 py-3 bg-dark text-light">
            <Container>
                <Row>
                    <Col md={4} className="about-us-column">
                        <h5>About Us</h5>
                        <ul>
                            <li>Expert Team</li>
                            <li>Tailored Solutions</li>
                            <li>Data-Driven Approach</li>
                            <li>Innovation & Creativity</li>
                            <li>Client-Centric Focus</li>
                            <li>Brand Development</li>
                        </ul>
                    </Col>
                    <Col md={3} className="about-us-column">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="about-us-column">
                        <h5>Contact Information</h5>
                        <p>Address: 123 ABC Street, City, Country</p>
                        <p>Email: akshay@gmail.com</p>
                        <p>Phone: +1234567890</p>
                    </Col>
                    <Col md={2}>
                        <h5>Follow Us</h5>
                        {/* Add social media icons or links here */}
                        {/* <a href="#"><i className="fab fa-facebook-f">facebook</i></a> <br />
                        <a href="#"><i className="fab fa-twitter"></i>Twitter</a> <br />
                        <a href="#"><i className="fab fa-instagram"></i>Instagram</a> */}
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a><br />
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /> </a><br />
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /> </a>
                    </Col>
                </Row>
                <Row>
                    <h3 className="mt-2 py-3 t">Shop for the Best Computer Monitors Online</h3>

                    <p style={{ fontSize: '12px', fontWeight: '100' }}>  In today’s market, you can find monitors that are Full HD, 4K, HD Ready, and different display types such as Plasma, LED, LCD, and many other varieties. Thus, you have a multitude of options to choose from. And, it is imperative to choose a good quality monitor as it will not only provide you with great clarity (so that you get an immersive experience every time), but will also protect your eyes from damage even after extended use. </p>
                </Row>
            </Container>
            <div className="text-center py-2">
                &copy; {new Date().getFullYear()} akshay.com | All Rights Reserved
            </div>
        </footer>
    );
};

export default Home;
