import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import DealerService from '../Services/DealerService'
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
 import img5 from '../images/dealerlogin1.jpg';
import { Jumbotron } from 'react-bootstrap';

const passwordRegex = RegExp(
  // /^(?=.\\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/
);
const emailRegex = RegExp(
  // /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
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

class DealerLogin extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false
    this.state = {
      dealerEmailId: '',
      dealerPassword: '',
      emailError: "",
      passError: "",
      loggedIn,

      formErrors: {
        dealerEmailId: "",
        dealerPassword: ""
      }
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.dealerLogin = this.dealerLogin.bind(this);
  }

  componentDidMount() {

    // step 4
    if (this.state.dealerEmailId === '_add') {
      return
    }
  }


  validate = () => {

    let emailError = "";
    let passError = "";

    if (!this.state.dealerPassword) {
      passError = "Password cannot be blank";
    }
    if (!this.state.dealerEmailId) {
      emailError = "Email cannot be blank";
    }


    if (emailError || passError) {
      this.setState({ emailError, passError });
      return false;
    }
    return true;
  }

  dealerLogin = (e) => {
    const isValid = this.validate();
    e.preventDefault();
    let dealer = {
      dealerEmailId: this.state.dealerEmailId,
      dealerPassword: this.state.dealerPassword
    };
    if (isValid) {
      console.log(JSON.stringify(dealer));
      DealerService.dealerLogin(dealer).then(res => {
        localStorage.setItem("token1", "abc")

        this.setState({ loggedIn: true });
        console.log("success")
        alert("Login Successful")
        this.props.history.push("/dealer-home")
      }, error => {
        toast.error("Invalid Email or Password")
        alert("Invalid Details");
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
              --SUBMITTING--
              dealer Email:${this.state.dealerEmailId}
              dealer password:${this.state.dealerPassword}
              
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
      case "dealerEmail":
        formErrors.dealerEmailId = emailRegex.test(value)
          //value.length < 5 ? "please enter a valid email" : "")
          ? ""
          : "invalid email";
        break;
      case "dealerPassword":
        formErrors.dealerPassword = passwordRegex.test(value)
          ? ""
          : "Enter valid password";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  cancel() {
    this.props.history.push(`/dealer-home/${this.state.dealerEmailId}`);
  }

  changeEmailHandler = (event) => {
    this.setState({ dealerEmailId: event.target.value });
  }

  changePasswordHandler = (event) => {
    this.setState({ dealerPassword: event.target.value });
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div style={{
         backgroundImage: `url(${img5})`,
        backgroundSize: "contain"
      }}>
        <div style={{
          backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px"
        }}>
          <Jumbotron style={{ width: 600, height: 500, textAlign: "center", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
            <h1 style={{ fontFamily: "Copperplate" }}>  
             <FontAwesomeIcon icon={faUsers} />  
            Dealer Login</h1>
            <br />

            <Form
              onSubmit={this.handleSubmit} style={{ textAlign: "left" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Email Id</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                     <FontAwesomeIcon icon={faUser} /> 
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control className={this.state.dealerEmailId.length < 0 ? "error" : null} required autoComplete="off" type="text" id="Email" name="email" value={this.state.dealerEmailId} onChange={this.changeEmailHandler} placeholder="Enter Email" />
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
                    <InputGroup.Text>
                     <FontAwesomeIcon icon={faLock} /> 
                    </InputGroup.Text>
                  </InputGroup.Prepend>

                  <input placeholder="Enter Password " type="password" name="password"
                    className="form-control" value={this.state.dealerPassword}
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
                <Button variant="success" type="submit" style={{ padding: "7px 80px", marginLeft: "140px" }} onClick={this.dealerLogin}
                >
                   <FontAwesomeIcon icon={faUserPlus} />    
                LOG IN </Button>

              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <small><Link to="/dealersignup" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "180px" }}>New User? - SignUp</h5></Link></small>
              </Form.Group>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default DealerLogin;