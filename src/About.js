// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import './About.css';
// class About extends Component {
//     render() {
//         return (

//             <div>
//                 <div className="div1">

//                     <h2>Welcome to IEC</h2>

//                 </div>




//                 <div className="container ">
//                     <h2 className="h22">*****Hello, This is All About Us.****</h2>
//                     <div className="row">
//                         <div className="col-md-4">
//                             <p>l
//                                 Sure, here is a Lorem Ipsum placeholder text with approximately 200 words:
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus finibus massa, non suscipit arcu vestibulum sed. Duis et eros sit amet enim eleifend malesuada. Vestibulum non consectetur justo. Integer nec lacus eget risus efficitur ullamcorper. Vestibulum ac vehicula lorem. Cras lacinia nulla vitae dui fermentum, id gravida velit elementum. Sed euismod euismod erat, a ullamcorper neque bibendum sit amet. Aliquam non nunc efficitur, venenatis leo id, convallis felis. Vivamus elementum, quam nec tincidunt pharetra, risus tortor ultricies dui, non bibendum nunc elit nec libero. Phasellus vehicula auctor justo nec finibus. Quisque in mi mi. Phasellus eu turpis et ante volutpat consequat. Suspendisse potenti. Nam at odio eu elit lobortis pulvinar.
//                                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sed elit lectus. Proin malesuada leo non massa suscipit, in varius est tempor. Sed Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada volutpat enim in dictum fermentum. Ut id nulla enim. Curabitur rhoncus quam at tempor scelerisque. Vivamus et nulla augue. Nulla facilisi. Phasellus tincidunt elit et risus blandit, id sodales nunc rhoncus. Nam hendrerit augue id dui mollis, quis consectetur risus fringilla. Vestibulum vitae eros vitae nisl dapibus tincidunt. Vivamus mattis ex id dui blandit, nec convallis elit efficitur. Sed at velit quis turpis accumsan tempor. Vivamus commodo sapien at metus facilisis ultrices. Vivamus non nulla varius, venenatis elit vel, ullamcorper ipsum.
//                                 Please note that Lorem Ipsum text is commonly used as placeholder text in the design and publishing industry when the actual content is not available.
//                             </p>
//                         </div>
//                         <div className="col-md-4">
//                             <p> Pellentesque habitant morbi tristique Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuadaPellentesque habitant morbi tristique senectus et netus et malesuadasenectus et netus et malesuada You can create your own components and style them using Bootstrap classes.</p>
//                         </div>
//                         <div className="col-md-4">
//                             <p> Pellentesque habitant morbi tristique senectus et netus et malesuadaPellentesque habitant morbi tristique senectus et netus et malesuadaPellentesque habitant morbi tristique senectus et netus et malesuadaPellentesque habitant morbi tristique senectus et netus et malesuadaPellentesque habitant morbi tristique senectus et netus et malesuadaPellentesque habitant morbi tristique senectus et netus et malesuadaPellentesque habitant morbi tristique senectus et netus et malesuadaYou can create your own components and style them using Bootstrap classes.</p>
//                         </div>
//                     </div>

//                 </div>

//             </div>


//         )
//     }
// }
// export default About;





import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { CardBody, CardGroup, CardText } from "react-bootstrap";
import './About.css';
class About extends Component {
    render() {

        const cardStylecard = {
            width: '20rem',
            margin: '10px',
            border: '1px solid black',
          
        };

        return (

            <>
                {/* 1st Image */}
                <div class="myAbout" style={{ marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"RGB(127, 255, 212)"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones9.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>bAot 102.NB With Upto 24 hour Play Back Bluetooth Headset Neckband Bluetooth Headset  (Black, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 649</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 849</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 74% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>
                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above  <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above  <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>
                                    </Card.Text>
                                    <Link to="/signup">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>

                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd Image */}
                <div class="myAbout" style={{  marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"RGB(127, 255, 212)"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones8.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>Worricow Wireless Bluetooth ortable Sports Headphone with Microphone Bluetooth Headset  (Black, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 475</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 649</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 52% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>
                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>
                                    </Card.Text>
                                    <Link to="/signup">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>

                                </Card.Body>

                            </div>
                        </div>
                    </div>

                </div>





                {/* 3rd Image */}
                <div class="myAbout" style={{  marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"RGB(127, 255, 212)"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones7.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>Worricow Wireless Bluetooth ortable Sports Headphone with Microphone Bluetooth Headset  (Red, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 675</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 949</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 58% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>

                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>

                                    </Card.Text>
                                    <Link to="/signup">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>


                                </Card.Body>


                            </div>
                        </div>
                    </div>

                </div>


                {/* 4th Image */}
                <div class="myAbout" style={{  marginBottom: "40px", marginLeft: "3px" }}>
                    <div className="container " style={{ marginBottom: "20px" }}>

                        <div className="row" style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"RGB(127, 255, 212)"}}>
                            <div className="col-md-5">
                                <img style={{ marginTop: "20px" }} src="./Pics/heaphones6.jpg" alt="Description of the image" className="img-fluid" />
                            </div>

                            <div className="col-md-7">

                                <Card.Body>
                                    <Card.Title>OnePlus Bullets Wireless Z2 ANC Bluetooth in Ear Earphones with 45dB Hybrid ANC Bluetooth Headset  (Boomin Black, In the Ear)</Card.Title>

                                    <Card.Subtitle className="mb-2 " style={{ marginTop: "10px" }} >
                                        <span style={{ fontSize: "1.5em" }}>₹ 2,299</span>
                                        <span className=" text-muted" style={{ textDecoration: "line-through", marginLeft: "10px" }}>₹ 2,499</span>
                                        <span style={{ color: "green", marginLeft: "10px" }}> 58% off</span>
                                    </Card.Subtitle>

                                    <h2>Available offers</h2>
                                    <Card.Text>
                                        <ul>

                                            <li>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and above <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                            <li>Buy this product and Get Extra ₹100 Off on Select Room Heaters <a style={{ textDecoration: "none" }} href="#">T&C </a></li>
                                        </ul>

                                    </Card.Text>
                                    <Link to="/signup">
                                        <Button variant="primary">Buy Now</Button>
                                    </Link>


                                </Card.Body>


                            </div>
                        </div>
                    </div>

                </div>






                {/* card stylish start */}


                <div className='Cardone' id='mobile'>
                    <h3>Best Offer's</h3>
                    <div>

                        <CardGroup >
                            <Card className="text-center" 
                            >
                                <Card.Header>Minimum 50% off | Top styles for him</Card.Header>
                                <Card.Body>
                                    <Card className="text-center" style={{ border: "none" }} >

                                        <div class="row">
                                            <div class="col-md-6">


                                                <a href="#"> <Card.Img variant="top" src="./Pics/mencloth.jpg"></Card.Img>
                                                </a>
                                                <p>Clothing</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src="./Pics/menfootwear.jpg"></Card.Img></a>

                                                <p>Footwear</p>
                                            </div>
                                        </div>

                                        <div class="row" >
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src="./Pics/menwatch.jpg"></Card.Img></a>
                                                <p>Watches</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#">  <Card.Img variant="top" src="./Pics/menbags.jpg"></Card.Img></a>
                                                <p>Bags and Wallet's</p>
                                            </div>
                                        </div>

                                    </Card>

                                </Card.Body>


                            </Card>



                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Minimum 50% off | Top styles for her</Card.Header>
                                <Card.Body>
                                    <Card className="text-center" style={{ border: "none" }} >

                                        <div class="row">
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src="./Pics/femalecloth.jpg"></Card.Img></a>
                                                <p>Clothing</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src="./Pics/femalecloth.jpg"></Card.Img></a>
                                                <p>Footwear</p>
                                            </div>
                                        </div>

                                        <div class="row" >
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src="./Pics/femalewatch.jpg"></Card.Img></a>
                                                <p>Watches</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src="./Pics/femalebags.jpg"></Card.Img></a>
                                                <p>Bags and Wallet's</p>
                                            </div>
                                        </div>

                                    </Card>

                                </Card.Body>


                            </Card>


                            <Card className="text-center" style={cardStylecard}>
                                <Card.Header>Try Prime today</Card.Header>
                                <Card.Body>
                                    <Card className="text-center" style={{ border: "none" }} >

                                        <div class="row">
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src="./Pics/freedelivery.jpg"></Card.Img></a>
                                                <p>FREE 1-day delivery </p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src="./Pics/latestmovies.jpg"></Card.Img></a>
                                                <p>Latest Movies </p>
                                            </div>
                                        </div>

                                        <div class="row" >
                                            <div class="col-md-6">
                                                <a href="#"><Card.Img variant="top" src="./Pics/freemusic.jpg"></Card.Img></a>
                                                <p>Ad-free Music</p>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="#"> <Card.Img variant="top" src="./Pics/cashback.jpg"></Card.Img></a>
                                                <p>5% Cashback</p>
                                            </div>
                                        </div>

                                    </Card>

                                </Card.Body>


                            </Card>

                        </CardGroup>
                    </div>
                </div>









            </>


        )
    }
}
export default About;