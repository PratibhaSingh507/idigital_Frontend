import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Form, Jumbotron, Button } from 'react-bootstrap';
import { } from '../../src/index.css';
import img5 from '../images/admin2.jpg';
import img6 from '../images/adbg.jpg'
import { toast, ToastContainer } from 'react-toastify';
import Adminservice from '../Services/Adminservice';


class AdminLoginComponent extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {

            email: '',
            password: '',
            emailError: "",
            passError: "",
            loggedIn
        }

        this.changeCandidateEmailHandler = this.changeCandidateEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveCandidate = this.saveCandidate.bind(this);
    }
    validate = () => {

        let emailError = "";
        let passError = "";

        if (!this.state.password) {
            passError = "Password cannot be blank";
        }
        if (!this.state.email) {
            emailError = "Email cannot be blank";
        }

        if (emailError || passError) {
            this.setState({ emailError, passError });
            return false;
        }
        return true;
    }

    saveCandidate = (e) => {
        const isValid = this.validate();
        e.preventDefault();
        let admin = {
            email: this.state.email,
            password: this.state.password
        };
        if (isValid) {
            console.log(JSON.stringify(admin));
            Adminservice.createAdmin(admin).then(res => {
                localStorage.setItem("token1", "abc")

                this.setState({ loggedIn: true });
                console.log("success")
                this.props.history.push("/admin-home")
            }, error => {
                //toast.error("Invalid Email or Password")
                alert("Invalid Email or Password");
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const isvalid = this.validate();
        if (isvalid) {
            console.log(this.state);

        }
    }
    cancel() {
        this.props.history.push('/admin');
    }


    changeCandidateEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }


    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    render() {
        return (
            // All Final Operations and Functions
            <div style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: "contain"
            }}>
                <div style={{
                    backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(10)',
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "30px"
                }}>
                    <Jumbotron style={{ width: 600, height: 480, textAlign: "center", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
                        <h1 style={{ fontFamily: "Copperplate" }}>  <FontAwesomeIcon icon={faUsers} /> Admin Login</h1>
                        <br />
                        <Form style={{ textAlign: "left" }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Enter Email-Id</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="email" name="email" placeholder="Enter Email" value={this.state.email}
                                        onChange={this.changeCandidateEmailHandler} />
                                </InputGroup>
                                <div style={{ color: "#ffff33" }}>{this.state.emailError}</div>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Enter Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="password" id="Password" name="pwd" placeholder="Enter Password" value={this.state.password}
                                        onChange={this.changePasswordHandler} />
                                </InputGroup>
                                <div style={{ color: "#ffff33" }}>{this.state.passError}</div>
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formBasicButton">
                                <Button variant="success" type="submit" onClick={this.saveCandidate} style={{ padding: "7px 60px", marginLeft: "170px" }}> <FontAwesomeIcon icon={faUserPlus} /> LOG IN </Button>{' '}
                            </Form.Group>
                            <ToastContainer />
                        </Form>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default AdminLoginComponent;