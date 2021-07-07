import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Jumbotron, Button, Card, Row, Col, CardImg } from 'react-bootstrap';
import img6 from '../images/fields.jpg';
import { Link } from "react-router-dom";

class FarmerHome extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token1")
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      emailId: this.props.match.params.email,
      loggedIn
    }
  }
  render() {
    if (this.state.loggedIn == false) {
      return <Redirect to="/loginFarmer" />
    }


    return (
      <div style={{ backgroundImage: 'linear-gradient(to right, black, lightgreen)', }}>
        <div style={{
          backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
          padding: "40px 40px"
        }}>


       <div style={{backgroundImage: `url(${img6})`,backgroundSize: "contain"}}>
          <Row>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>

              <p>
                <Link to={`/farmers/${this.state.emailId}`}><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)', padding: "10px 84px 10px 84px", color: "white", fontSize: "20px", fontFamily: "Apple Chancery" }}>View Farmers</Button></Link>
              </p>
              <p>
                <Link to={`/addComplaint/${this.state.emailId}`}><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #fc5c7d, #6a82fb)', padding: "10px 80px 10px 80px", color: "white", fontSize: "20px", fontFamily: "Apple Chancery" }}>Post Complaints</Button></Link>
              </p>
              <p>
                <Link to={`/viewAdvertisements/${this.state.emailId}`}><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)', padding: "10px 55px 10px 55px", color: "white", fontSize: "20px", fontFamily: "Apple Chancery" }}>View All Advertisement</Button></Link>
              </p>
              <p>
                <Link to={`/add-crop`}><Button variant="bg-transparent" style={{ background: 'linear-gradient(to right, #fc5c7d, #6a82fb)', padding: "10px 80px 10px 80px", color: "white", fontSize: "20px", fontFamily: "Apple Chancery" }}>Sell Crop</Button></Link>
              </p>
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>

              <Card style={{ backgroundColor: 'rgba(15,15,15,0.2)', color: "white", fontSize: "25px", fontFamily: "Apple Chancery" }}>

                {/* <CardImg src={img3} ></CardImg> */}
                <br />
                <Card.Title style={{ fontSize: "40px", color: "black" }}>Welcome Farmer!</Card.Title>
                <Card.Text>Farmer can post complaints,</Card.Text>
                <Card.Text>can view and delete complaints,</Card.Text>
                <Card.Text>can view all the Advertisements,</Card.Text>
               
                <Card.Text><Link to="/"><Button variant="danger" style={{ padding: "10px 30px" }}>Logout</Button></Link></Card.Text>
                <br />
              </Card>


            </Col>
          </Row>
          {/* </Jumbotron> */}
        </div>
      </div>
      </div>
    );



  }
}


export default FarmerHome;