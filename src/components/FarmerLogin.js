import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import FarmerService from '../Services/FarmerService'
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import img5 from '../images/farmlogin.jpg';
import { Jumbotron } from 'react-bootstrap';

const passwordRegex = RegExp(
  /^(?=.\\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/
);
const emailRegex = RegExp(
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
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

class FarmerLogin extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false
    this.state = {
      emailId: '',
      password: '',
      emailError: "",
      passError: "",
      loggedIn,

      formErrors: {
        emailId: "",
        password: ""
      }
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.farmerLogin = this.farmerLogin.bind(this);
  }

  componentDidMount() {

    // step 4
    if (this.state.emailId === '_add') {
      return
    }
  }


  validate = () => {

    let emailError = "";
    let passError = "";

    if (!this.state.password) {
      passError = "Password cannot be blank";
    }
    if (!this.state.emailId) {
      emailError = "Email cannot be blank";
    }


    if (emailError || passError) {
      this.setState({ emailError, passError });
      return false;
    }
    return true;
  }

  farmerLogin = (e) => {
    const isValid = this.validate();
    e.preventDefault();
    let farmer = {
      emailId: this.state.emailId,
      password: this.state.password
    };
    if (isValid) {
      console.log(JSON.stringify(farmer));
      FarmerService.farmerLogin(farmer).then(res => {
        localStorage.setItem("token1", "abc")

        this.setState({ loggedIn: true });
        console.log("success")
        alert("Login Successful")
        this.props.history.push(`/farmer-home/${this.state.emailId}`)
      }, error => {
        toast.error("Invalid Email or Password")
        alert("invalid details");
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
              --SUBMITTING--
              farmer Email:${this.state.emailId}
              farmer password:${this.state.password}
              
            `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "emailId":
        formErrors.emailId = emailRegex.test(value)
          //value.length < 5 ? "please enter a valid email" : "")
          ? ""
          : "invalid email";
        break;
      case "password":
        formErrors.password = passwordRegex.test(value)
          ? ""
          : "Enter valid password";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  cancel() {
    this.props.history.push(`/farmer-home/${this.state.emailId}`);
  }

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  }

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    const { formErrors } = this.state;
    return (
        <div style={{
            backgroundImage: `url(${img5})`,
            backgroundSize: "contain"
        }}>
            <div style={{
                backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)',
                display: "flex",
                justifyContent: "center",
                paddingTop: "30px"
            }}>
          <Jumbotron style={{ width: 600, height: 500, textAlign: "center", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
            <h1 style={{ fontFamily: "Apple Chancery" }}>  <FontAwesomeIcon icon={faUsers} /> Farmer Login</h1>
            <br />

            <Form
              onSubmit={this.handleSubmit} style={{ textAlign: "left" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Email Id</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={this.state.emailId.length > 0 ? "error" : null} required autoComplete="off" type="text" id="Email" name="email" value={this.state.emailId} onChange={this.changeEmailHandler} placeholder="Enter Email" />
                </InputGroup>
                {/*    {formErrors.farmerEmail.length > 0 && (
                    <span className="errorMessage">{formErrors.farmerEmail}</span>
             )}  */}
                <div style={{ color: "#ffff33" }}>{this.state.emailError}</div>
              </Form.Group>


              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                  </InputGroup.Prepend>

                  <input placeholder="Enter Password " type="password" name="password"
                    className="form-control" value={this.state.password}
                    onChange={this.changePasswordHandler} />
                  {/*  <div style={{ color: "red" }}>{this.state.passError}</div> */}
                </InputGroup>
                <div style={{ color: "#ffff33" }}>{this.state.passError}</div>
              </Form.Group>

              {/*<Form.Control className={formErrors.farmerPassword.length > 0 ? "error" : null} autoComplete="off" type="password" id="Password" name="password" value={this.state.farmerPassword} onChange={this.handleChange} placeholder="Enter Password" />
                </InputGroup> 
                    {formErrors.farmerPassword.length > 0 && (
                        <span className="errorMessage">{formErrors.farmerPassword}</span>
                    )}   */}

              <br />

              <Form.Group controlId="formBasicButton">
                {/* <Button variant="success" type="submit" style={{padding: "7px 80px", marginLeft:"140px"}} onClick={this.farmerLogin}
                disabled={this.state.farmerPassword.length === 0 || this.state.farmerEmail.length === 0}> <FontAwesomeIcon icon={faUserPlus} />   LOG IN </Button>  */}
                <Button variant="success" type="submit" style={{ padding: "7px 80px", marginLeft: "140px" }} onClick={this.farmerLogin}
                ><FontAwesomeIcon icon={faUserPlus} />   LOG IN </Button>

              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <small><Link to="/signup" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "180px" }}>New User? - SignUp</h5></Link></small>
              </Form.Group>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default FarmerLogin;