import { Button, Card, Row, CardColumns } from 'react-bootstrap';
import img5 from '../images/new.jpg';
import img1 from '../images/green.jpg'
import img2 from '../images/yellow.jpg'

const HomeComponent = () => {
  return (
    <div style={{
      backgroundImage: `url(${img2})`, backgroundSize: "cover"
    }}>
      <div style={{ backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)', padding: "40px 40px" }}>


        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: "white" }}>
        <h1 style ={{ color: "yellow"}}><b><i><marquee behavior="scroll" direction="left" scrollamount="12"> Welcome to Farmer Assistance System </marquee></i> </b></h1>
          
          <p>
            <h6><i>We have various services to offer. See the cards to get the brief description about each of the services!</i></h6>
          </p>
         
          <p>
            <h4><b><i>Please Login to use the services!!</i></b></h4>
          </p>
          <br />
        </Row>

        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <CardColumns>
            <Card
              bg="transparent" text="light" className="mb-3" style={{ width: "20rem" }}>
              <a href="/adminLogin">
                <Card.Body style={{ backgroundImage: 'linear-gradient(to top, #ccccff 0%, #66ccff 100%)' }}>
                  <Button variant="link" style={{ padding: "50px 80px", textDecoration: "none", fontFamily: "Apple Chancery", fontSize: "20px", color: "black" }} >Admin Login</Button>
                </Card.Body>
              </a>
              <Card.Body style={{ paddingBottom: "45px" }}>
                <Card.Title style={{ color: "white" }} href='/admin'><b><i>Admin Services</i></b></Card.Title>
                <Card.Text style={{ color: "white" }}><b><i> In Admin Service, admin can maintian the data of farmer and dealer, can view the complaints about dealer(s) </i></b></Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="transparent" text="light" className="mb-3" style={{ width: "20rem" }}>
              <a href="/home">
                <Card.Body style={{ backgroundImage: 'linear-gradient(to bottom left, #33cc33 0%, #0099cc 100%)' }}>
                  <Button variant="link" style={{ padding: "50px 80px", textDecoration: "none", fontFamily: "Apple Chancery", fontSize: "20px", color: "black" }} >Farmer Login</Button>
                </Card.Body>
              </a>
              <Card.Body>
                <Card.Title style={{ color: "white" }} href='/admin'><b><i>Farmer Services</i></b></Card.Title>
                <Card.Text style={{ color: "white" }}><b><i> In Farmer Service, farmer can contact with dealer(s), can complaint about dealer(s), can view & delete complaint(s),can also view advertisement posted by the dealer(s)!</i></b></Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="transparent" text="light" className="mb-3" style={{ width: "20rem" }}>
              <a href="/DealerLogin">
                <Card.Body style={{ backgroundImage: 'linear-gradient(to bottom left, #ff3399 0%, #0099cc 100%)' }}>
                  <Button variant="link" style={{ padding: "50px 80px", textDecoration: "none", fontFamily: "Apple Chancery", fontSize: "20px", color: "black" }} >Dealer Login</Button>
                </Card.Body>
              </a>
              <Card.Body>
                <Card.Title style={{ color: "white" }} href='/admin'><b><i>Dealer Services</i></b></Card.Title>
                <Card.Text style={{ color: "white" }}><b><i>In Dealer Service, dealer can contact  farmer(s), can post advertisement(s), can view & delete advertisement(s) and can also view complaint(s) to provide resolution!</i></b></Card.Text>
              </Card.Body>
            </Card>


          </CardColumns>


        </Row>

      </div>
    </div>
  );
}
export default HomeComponent;