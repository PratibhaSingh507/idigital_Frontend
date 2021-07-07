import React, { Component } from 'react' 

import FarmerService from '../Services/FarmerService' 
import img6 from '../images/fields.jpg'
 

class ViewFarmerById extends Component { 

    constructor(props) { 

        super(props) 

 

        this.state = { 

            id: this.props.match.params.id, 

            farmer: {} 

        } 

    } 

 

    componentDidMount(){ 

        FarmerService.viewFarmerById(this.state.id).then( res => { 

            this.setState({farmer: res.data}); 

        }) 

    } 

 

    goBack(){ 

        this.props.history.push('/updateFarmer'); 

    } 

 

    render() { 

        return (       
            <div style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: "contain"
            }}>     

            <div className = "container"> 
                <br></br> 

                <h3 className = "text-center"> View Farmer Details</h3> 

                <br></br>              
                <table className = "table table-striped table-bordered"> 

                          <tbody>  
                                <tr> 
                                    <td>Farmer Id</td>  <td> {this.state.farmer.farmerId} </td>                                                                       
                                </tr> 
                                <tr> 
                                    <td>Farmer Name</td> <td> {this.state.farmer.farmerName} </td>                                                                 
                                </tr> 
                                
                                <tr> 
                                    <td> Email Id</td> <td> {this.state.farmer.emailId}</td> 
                                </tr> 
                                <tr> 
                                    <td> password</td> <td> {this.state.farmer.password}</td> 
                                </tr> 
                                <tr> 
                                    <td> Location</td> <td> {this.state.farmer.location}</td> 
                                </tr> 
                                <tr> 
                                    <td> Contact</td> <td> {this.state.farmer.contactNo}</td> 
                                </tr>                             

                            </tbody>  

                    </table> 
                <button className="btn btn-danger" onClick={this.goBack.bind(this)} style={{marginLeft: "10px"}}>Back</button> 
                </div> 
                </div>
        ) 

    } 

} 

 

export default ViewFarmerById;