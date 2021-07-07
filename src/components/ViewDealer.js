import React, {Component} from 'react';
import DealerService from '../Services/DealerService';
import { Link } from "react-router-dom";
import { Jumbotron, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';



class ViewDealer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dealers: []
        }
        this.addDealer = this.addDealer.bind(this);
        this.viewDealer = this.viewDealer.bind(this);
        this.updateDealer = this.updateDealer.bind(this);
        this.deleteDealer = this.deleteDealer.bind(this); 
    }
    deleteDealer(id){ 

        DealerService.deleteDealer(id).then( res => { 

            this.setState({dealer: this.state.dealers.filter(dealer => dealer.dealerId !== id)}); 

        }); 

    } 

    viewDealer(id){
        this.props.history.push('/view-dealer/'+id);
    }
    updateDealer(id) {
        this.props.history.push('/add-dealer/'+id);
    }
    componentDidMount() {
        DealerService.getDealers().then((res) => {
            console.log(res.data);
            this.setState({dealers:res.data});
        });
    }
    addDealer() {
        this.props.history.push('/add-dealer/_add');
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
            {/* <div>
                <h2 className="text-center"> Dealers List </h2>
                {/* <button className="btn btn-primary" onClick={this.addDealer}>Register Dealer</button> */}
                {/* <div className ="row">
                    
                </div>
                <br></br>
                <div className ="row">
                    <table className="table table-striped table-bordered"> */}
                    <Jumbotron style={{ width: 1500, marginTop: "60px", marginBottom: "60px", backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white' }}>
                        <h1 style={{ fontFamily: "Forte" }}>List of Dealer(s)</h1>
                        <br />
                        <Table striped bordered hover variant="dark">
                        {/* <thread> */}
                            <tr>
                                <th> Dealer Id</th>
                                <th>Dealer Name</th>
                                <th>Dealer Contact Number</th>
                                <th>Dealer Email Id</th>
                                <th> Dealer Password</th>
                                 <th> Action</th> 
                            </tr>
                        {/* </thread> */}
                        <tbody>
                            {
                                this.state.dealers.map(
                                    dealer =>
                                    
                                    <tr key={dealer.dealerId}>
                                        <td>{dealer.dealerId}</td>
                                        <td>{dealer.dealerName}</td>
                                        <td>{dealer.dealerContactNumber}</td>
                                        <td>{dealer.dealerEmailId}</td> 
                                        <td>{dealer.dealerPassword}</td>
                                         <td> 
                                             <button onClick={ () => this.updateDealer(dealer.dealerId)} className="btn btn-info">Update</button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDealer(dealer.dealerId)} className="btn btn-danger">Delete </button> 
                                             <button style={{marginLeft:"10px"}} onClick={ () => this.viewDealer(dealer.dealerId)} className="btn btn-info">View</button> 

                                         </td> 
                                    </tr>
                                )
                            }
                        </tbody>
                        </Table>
                        <br />

                   
               
                <Link to="/dealer-home">
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
export default ViewDealer;