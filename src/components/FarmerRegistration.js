import React, { Component } from 'react'
import { Link } from "react-router-dom";
import FarmerService from '../Services/FarmerService';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import img6 from '../images/fields.jpg';
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

class FarmerRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      farmerName: '',
      emailId: '',
      contactNo: '',
      password: '',
      location:'',

      formErrors: {
        farmerName: "",
        emailId: "",
        contactNo: "",
        password: "",
        location:""
      }
    };
    this.addFarmer = this.addFarmer.bind(this);
  }

  componentDidMount() {

    // step 4
    if (this.state.emailId === '_add') {
      return

    }
  }


  addFarmer = (e) => {
    e.preventDefault();
    let farmer = { farmerName: this.state.farmerName, emailId: this.state.emailId, contactNo: this.state.contactNo, password: this.state.password, location: this.state.location };
    console.log('farmer => ' + JSON.stringify(farmer));

    FarmerService.registerFarmer(farmer).then(res => {
      this.props.history.push('/home');
    }, error => {
      alert("Invalid Name, EmailId, ContactNo or Password");
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
            --SUBMITTING--
            farmer Name: ${this.state.farmerName}
            farmer Email:${this.statr.emailId}
            farmer Contact Number: ${this.state.contactNo}
            farmer password:${this.state.password}
            farmer palocation:${this.state.location}
             
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
      case "farmerName":
        formErrors.farmerName = nameRegex.test(value)
          ? "" : "Invalid Name";
        break;
      case "emailId":
        formErrors.emailId = emailRegex.test(value)
          //value.length < 5 ? "please enter a valid email" : "")
          ? ""
          : "invalid email";
        break;
      case "contactNo":
        formErrors.contactNo = numberRegex.test(value)
          ? ""
          : "invalid Contact Number";
        break;
      case "password":
        formErrors.password = passwordRegex.test(value)
          ? ""
          : "validate password";
        break;
        case "location":
          formErrors.location = passwordRegex.test(value)
            ? ""
            : "validate location";
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
        backgroundImage: `url(${img6})`,
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
                  <Form.Control className={formErrors.farmerName.length > 0 ? "error" : null} autoComplete="off" type="text" name="farmerName" placeholder="Enter Name" value={this.state.farmerName} onChange={this.handleChange} />
                </InputGroup>
                {formErrors.farmerName.length > 0 && (
                  <span className="errorMessage">{formErrors.farmerName}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter EmailId</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.emailId.length > 0 ? "error" : null} required autoComplete="off" type="email" name="emailId" value={this.state.emailId} onChange={this.handleChange} id="Email" placeholder="Enter Email" />
                </InputGroup>
                {formErrors.emailId.length > 0 && (
                  <span className="errorMessage">{formErrors.emailId}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicContactNumber">
                <Form.Label>Enter Contact Number</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.contactNo.length > 0 ? "error" : null} autoComplete="off" type="contactNumber" name="contactNo" value={this.state.contactNo} onChange={this.handleChange} id="contact" placeholder="Enter Contact Number" />
                </InputGroup>
                {formErrors.contactNo.length > 0 && (
                  <span className="errorMessage">{formErrors.contactNo}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={formErrors.password.length > 0 ? "error" : null} autoComplete="off" type="password"
                    name="password" value={this.state.password} onChange={this.handleChange} id="Password" placeholder="Enter Password" />
                </InputGroup>
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
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
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicButton">
                <Button variant="success" type="submit" onClick={this.addFarmer} disabled={this.state.password.length === 0 || this.state.farmerName.length === 0 || this.state.emailId.length === 0 || this.state.contactNo.length === 0} style={{ padding: "7px 80px", marginLeft: "140px" }}> <FontAwesomeIcon icon={faUserPlus} />   SIGN-UP </Button>
              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <small><Link to="/home" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "125px" }}>Already Have an Account? - Log-in</h5></Link></small>
              </Form.Group>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default FarmerRegistration;