import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import img5 from '../images/image11.jpg';
import { Jumbotron } from 'react-bootstrap';


class AdminRegiatration extends Component {


   render() {

      return (
         <div>
            <div style={{
               backgroundImage: `url(${img5})`,
               display: "flex",
               justifyContent: "center",
               paddingTop: "30px"
            }}>
               <Jumbotron style={{ width: 600, height: 680, textAlign: "center", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
                  <h1 style={{ fontFamily: "Forte" }}>  <FontAwesomeIcon icon={faUsers} /> Sign up</h1>
                  <br />
                  <Form style={{ textAlign: "left" }}>

                     <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Name</Form.Label>
                        <InputGroup>
                           <InputGroup.Prepend>
                              <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control type="text" id="name" name="name" placeholder="Enter Name" />
                        </InputGroup>
                     </Form.Group>

                     <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter EmailId</Form.Label>
                        <InputGroup>
                           <InputGroup.Prepend>
                              <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control type="text" id="Email" name="email" placeholder="Enter Email" />
                        </InputGroup>
                     </Form.Group>

                     <Form.Group controlId="formBasicContactNumber">
                        <Form.Label>Enter Contact Number</Form.Label>
                        <InputGroup>
                           <InputGroup.Prepend>
                              <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control type="contactNumber" id="contact" name="contact" placeholder="Enter Contact Number" />
                        </InputGroup>
                     </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter Password</Form.Label>
                        <InputGroup>
                           <InputGroup.Prepend>
                              <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control type="password" id="Password" name="pwd" placeholder="Enter Password" />
                        </InputGroup>
                     </Form.Group>
                     <br />
                     <Form.Group controlId="formBasicButton">
                        <Button variant="success" type="submit" style={{ padding: "7px 80px", marginLeft: "140px" }}> <FontAwesomeIcon icon={faUserPlus} />   SIGN-UP </Button>
                     </Form.Group>
                     <Form.Group controlId="formBasicLink">
                        <small><Link to="/adminLogin" style={{ textDecoration: "none" }}><h5 style={{ fontFamily: "Calibri", paddingLeft: "125px" }}>Already Have an Account? - Log-in</h5></Link></small>
                     </Form.Group>
                  </Form>
               </Jumbotron>
            </div>
         </div>
      );
   }
}
export default AdminRegiatration