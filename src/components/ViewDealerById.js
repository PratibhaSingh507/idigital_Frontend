import React, { Component } from 'react' 

import DealerService from '../Services/DealerService' 

 

class ViewDealerById extends Component { 

    constructor(props) { 

        super(props) 

 

        this.state = { 

            id: this.props.match.params.id, 

            dealer: {} 

        } 

    } 

 

    componentDidMount(){ 

        DealerService.viewDealerById(this.state.id).then( res => { 

            this.setState({dealer: res.data}); 

        }) 

    } 

 

    goBack(){ 

        this.props.history.push('/dealers'); 

    } 

 

    render() { 

        return (            

            <div className = "container"> 
                <br></br> 

                <h3 className = "text-center"> View Dealer Details</h3> 

                <br></br>              
                <table className = "table table-striped table-bordered"> 

                          <tbody>  
                                <tr> 
                                    <td>Dealer Id</td>  <td> {this.state.dealer.dealerId} </td>                                                                       
                                </tr> 
                                <tr> 
                                    <td>Dealer Name</td> <td> {this.state.dealer.dealerName} </td>                                                                 
                                </tr> 
                                 <tr> 
                                    <td>Contact Number</td> <td> {this.state.dealer.dealerContactNumber}</td> 
                                </tr> 
                                <tr> 
                                    <td> Email Id</td> <td> {this.state.dealer.dealerEmailId}</td> 
                                </tr> 
                                <tr> 
                                    <td> password</td> <td> {this.state.dealer.dealerPassword}</td> 
                                </tr> 
                                {/* <tr> 
                                    <td> Location</td> <td> {this.state.farmer.location}</td> 
                                </tr> 
                                <tr> 
                                    <td> Contact</td> <td> {this.state.farmer.contactNo}</td> 
                                </tr>                              */}

                            </tbody>  

                    </table> 
                <button className="btn btn-danger" onClick={this.goBack.bind(this)} style={{marginLeft: "10px"}}>Back</button> 
                </div> 

        ) 

    } 

} 

 

export default ViewDealerById;