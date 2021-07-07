import React, { Component } from 'react'
import FarmerService from '../Services/FarmerService';
import { Link } from "react-router-dom";
import { Jumbotron, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';

class ListFarmerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            farmers: []
        }
    }
    componentDidMount() {
        FarmerService.viewFarmer()
            .then((res) => {
                this.setState({ farmers: res.data });
            });
    } render() {
        return (
            <div style={{ backgroundImage: 'linear-gradient(to right, black, lightgreen)', }}>
                <div style={{
                    backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
                    display: "flex",
                    justifyContent: "center",
                    padding: "40px 40px"
                }}>
                    <Jumbotron style={{ width: 1000, marginTop: "60px", marginBottom: "60px", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
                        <h1 style={{ fontFamily: "Forte" }}>List of Farmer(s)</h1>
                        <br />
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                   
                                    <th> ContactNo</th>
                                    <th> Location </th>
                                </tr>
                            </thead> <tbody>
                                {
                                    this.state.farmers.map(
                                        farmers =>
                                            <tr key={farmers.farmerId} >
                                                <td>{farmers.farmerId}</td>
                                                <td>{farmers.farmerName}</td>
                                                <td>{farmers.emailId}</td>
                                                
                                                <td>{farmers.contactNo}</td>
                                                <td>{farmers.location}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        <br />
                        <Link to="/farmer-home">
                            <Button variant="info"
                                type="back" id="btnback"
                                style={{ paddingLeft: "26px", paddingRight: "26px" }}>
                                <FontAwesomeIcon icon={faArrowLeft} />  Back</Button>
                        </Link>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}
export default ListFarmerComponent