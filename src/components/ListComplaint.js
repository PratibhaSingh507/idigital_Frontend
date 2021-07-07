import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import {Jumbotron, Button } from 'react-bootstrap';
import ComplaintService from '../Services/ComplaintService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class ListComplaint extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            complaints:[]
        }
    }
    
    componentDidMount(){
        ComplaintService.getAllComplaints()
        .then(response => 
            this.setState({complaints : response.data})
            );
    }

    render() {
        return (
            <div>
                <div style={{
            backgroundImage: 'linear-gradient(to right, black, lightgreen)',
            display: "flex",
            justifyContent: "center",
            paddingTop: "30px"
        }}>
            <Jumbotron style={{width: 1000, marginTop:"73px", marginBottom:"73px", backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white'}}>
                <h1 style={{fontFamily:"Forte"}}>All Complaints</h1>
                <Table striped hover variant="dark">
                    <thead>
                        <tr>
                            <th>Complaint Id</th>
                            <th>Farmer Name</th>
                            <th>Dealer Name</th>
                            <th>Complaint Details</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.complaints.map((complaint)=>
                        (
                            <tr key={complaint.cid}>
                                <td>{complaint.cid}</td>
                                <td>{complaint.farmer.farmerName}</td>
                                <td>{complaint.dealer.dealerName}</td>
                                <td>{complaint.cmessage}</td>
                                <td>{complaint.c_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to="/admin-home">
                    <Button variant="info" 
                            type="back" id="btnback" 
                            style={{paddingLeft:"26px", paddingRight:"26px"}}> 
                            <FontAwesomeIcon icon={faArrowLeft}/>  Back</Button>
                </Link>
            </Jumbotron>
        </div>
            </div>
        )
    }
}

export default ListComplaint;