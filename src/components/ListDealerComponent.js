import React, { Component } from 'react'

import Dealerservice from '../Services/DealerService';
import { Link } from "react-router-dom";
import { Jumbotron, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';



class ListDealerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dealer: []
        }
    }
    componentDidMount() {

        Dealerservice.getDealers()

            .then((res) => {

                this.setState({ dealer: res.data });

            });

    }
    render() {

        return (


            <div style={{ backgroundImage: 'linear-gradient(to right, black, lightgreen)', }}>
                <div style={{
                    backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)',
                    display: "flex",
                    justifyContent: "center",
                    padding: "40px 40px"
                }}>
                    <Jumbotron style={{ width: 1000, marginTop: "60px", marginBottom: "60px", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
                        <h1 style={{ fontFamily: "Forte" }}>List of Dealer(s)</h1>
                        <br />
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>EmailId</th>
                                    <th>ContactNo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.dealer.map(
                                        dealer =>
                                            <tr key={dealer.dealerId}>
                                                <td>{dealer.dealerId}</td>
                                                <td>{dealer.dealerName}</td>
                                                <td>{dealer.dealerEmailId}</td>
                                                <td>{dealer.dealerContactNumber}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        <br />
                        <Link to="/admin-home">
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

export default ListDealerComponent;