import React, { Component } from 'react'
import { Link } from "react-router-dom";
import DealerService from '../Services/DealerService';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import img5 from '../images/image33.jpg';
import { Jumbotron } from 'react-bootstrap';

const numberRegex = RegExp(
  /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
);

const nameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);

const emailRegex = RegExp(
  ///^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

);

const passwordRegex = RegExp(
  /^(?=.\\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class DealerRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealerName: '',
      dealerEmailId: '',
      dealerContactNumber: '',
      dealerPassword: '',
     

      formErrors: {
        dealerName: "",
        dealerEmailId: "",
        dealerContactNumber: "",
        dealerPassword: "",
       
      }
    };
    this.addDealer = this.addDealer.bind(this);
  }

  componentDidMount() {

    // step 4
    if (this.state.dealerEmailId === '_add') {
      return

    }
  }


  addDealer = (e) => {
    e.preventDefault();
    let dealer = { dealerName: this.state.dealerName, dealerEmailId: this.state.dealerEmailId, dealerContactNumber: this.state.dealerContactNumber, dealerPassword: this.state.dealerPassword};
    console.log('dealer => ' + JSON.stringify(dealer));

    DealerService.addDealer(dealer).then(res => {
      this.props.history.push('/DealerLogin');
    }, error => {
      alert("Invalid Name, EmailId, ContactNo or Password");
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
            --SUBMITTING--
                ]            dealer Name: ${this.state.dealerName}
            dealer Email:${this.statr.dealerEmailId}
            dealer Contact Number: ${this.state.dealerContactNumber}
            dealer password:${this.state.dealerPassword}
           
             
          `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert("enter valid details");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "dealerName":
        formErrors.dealerName = nameRegex.test(value)
          ? "" : "Invalid Name";
        break;
      case "dealerEmailId":
        formErrors.dealerEmailId = emailRegex.test(value)
          //value.length < 5 ? "please enter a valid email" : "")
          ? ""
          : "invalid email";
        break;
      case "dealerContactNumber":
        formErrors.dealerContactNumber = numberRegex.test(value)
          ? ""
          : "invalid Contact Number";
        break;
      case "dealerPassword":
        formErrors.dealerPassword = passwordRegex.test(value)
          ? ""
          : "validate password";
        break;
        
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {
    const { formErrors } = this.state;
    return (
      <div style={{
        backgroundImage: `url(${img5})`,
        backgroundSize: "cover"
      }}>
        <div style={{
          backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px"
        }}>
          <Jumbotron style={{ width: 600, height: 680, textAlign: "center", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
            <h1 style={{ fontFamily: "Apple Chancery" }}>  <FontAwesomeIcon icon={faUsers} /> Sign up</h1>
            <br />
            <Form style={{ textAlign: "left" }}>

              <Form.Group controlId="formBasicName">
                <Form.Label>Enter Name</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.dealerName.length > 0 ? "error" : null} autoComplete="off" type="text" name="dealerName" placeholder="Enter Name" value={this.state.dealerName} onChange={this.handleChange} />
                </InputGroup>
                {formErrors.dealerName.length > 0 && (
                  <span className="errorMessage">{formErrors.dealerName}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter EmailId</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.dealerEmailId.length > 0 ? "error" : null} required autoComplete="off" type="email" name="dealerEmailId" value={this.state.dealerEmailId} onChange={this.handleChange} id="Email" placeholder="Enter Email" />
                </InputGroup>
                {formErrors.dealerEmailId.length > 0 && (
                  <span className="errorMessage">{formErrors.dealerEmailId}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicContactNumber">
                <Form.Label>Enter Contact Number</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.dealerContactNumber.length > 0 ? "error" : null} autoComplete="off" type="contactNumber" name="dealerContactNumber" value={this.state.dealerContactNumber} onChange={this.handleChange} id="contact" placeholder="Enter Contact Number" />
                </InputGroup>
                {formErrors.dealerContactNumber.length > 0 && (
                  <span className="errorMessage">{formErrors.dealerContactNumber}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.dealerPassword.length > 0 ? "error" : null} autoComplete="off" type="password"
                    name="dealerPassword" value={this.state.dealerPassword} onChange={this.handleChange} id="Password" placeholder="Enter Password" />
                </InputGroup>
                {formErrors.dealerPassword.length > 0 && (
                  <span className="errorMessage">{formErrors.dealerPassword}</span>
                )}
              </Form.Group>

              {/* <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Location</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.location.length > 0 ? "error" : null} autoComplete="off" type="location"
                    name="location" value={this.state.location} onChange={this.handleChange} id="location" placeholder="Enter location" />
                </InputGroup>
                {formErrors.location.length > 0 && (
                  <span className="errorMessage">{formErrors.location}</span>
                )}
              </Form.Group> */}
              <br />
              <Form.Group controlId="formBasicButton">
                <Button variant="success" type="submit" onClick={this.addDealer} disabled={this.state.dealerPassword.length === 0 || this.state.dealerName.length === 0 || this.state.dealerEmailId.length === 0 || this.state.dealerContactNumber.length === 0} style={{ padding: "7px 80px", marginLeft: "140px" }}> <FontAwesomeIcon icon={faUserPlus} />   SIGN-UP </Button>
              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <small><Link to="/DealerLogin" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "125px" }}>Already Have an Account? - Log-in</h5></Link></small>
              </Form.Group>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default DealerRegister;