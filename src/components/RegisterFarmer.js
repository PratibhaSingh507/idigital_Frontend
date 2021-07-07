import React, { Component } from 'react' 

import FarmerService from '../Services/FarmerService'; 

import img6 from '../images/fields.jpg'
import { Form, InputGroup, Button } from 'react-bootstrap';
import './app1.css';

class RegisterFarmer extends Component { 

    constructor(props) { 

        super(props) 

        this.state = { 

            // step 2 

            id: this.props.match.params.id,
            farmerId: '', 
            farmerName: '', 
            cropName: '', 
            emailId: '' ,
            password: '' ,
            location: '' ,
            contactNo: '' 

        } 

        this.changeNameHandler = this.changeNameHandler.bind(this); 

        this.changeeIdHandler = this.changeeIdHandler.bind(this); 

        this.changeEmailHandler = this.changeEmailHandler.bind(this); 

        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeCropNameHandler = this.changeCropNameHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);

        this.saveOrUpdateFarmer = this.saveOrUpdateFarmer.bind(this); 

    } 

 
    // step 3 

    componentDidMount(){ 
        
   // step 4 

        if(this.state.id === '_add'){ 

            return 

        }else{ 

            let farmid= this.state.id; 

            FarmerService.viewFarmerById(farmid).then( (res) =>{ 

                let farmer = res.data; 

                console.log(JSON.stringify(farmer)); 

                this.setState({ 

                    farmerId: farmer.farmerId, 
                    farmerName: farmer.farmerName, 
                    emailId: farmer.emailId, 
                    password: farmer.password, 
                    cropName: farmer.cropName, 
                    location: farmer.location, 
                    contactNo: farmer.contactNo, 

                }); 

            }); 

        }         

    } 

    saveOrUpdateFarmer = (e) => { 

      

        let farmer = {farmerName: this.state.farmerName, cropName: this.state.cropName, farmerId: this.state.farmerId, emailId: this.state.emailId, password: this.state.password, location: this.state.location, contactNo: this.state.contactNo}; 

        e.preventDefault();

 

        // step 5 

        if(this.state.id === '_add'){ 

            

            FarmerService.registerFarmer(farmer).then(res =>{ 

                

                this.props.history.push('/updateFarmer'); 

            }); 

        }else{ 

            FarmerService.updateFarmer(farmer, this.state.farmerId).then( res => { 

                

                this.props.history.push('/updateFarmer'); 

            }); 

        } 

    } 

     

    changeNameHandler= (event) => { 

        this.setState({farmerName: event.target.value}); 

    } 

 

    changeeIdHandler= (event) => { 

        this.setState({farmerId: event.target.value}); 

    } 

 

    changeEmailHandler= (event) => { 

        this.setState({emailId: event.target.value}); 

    } 

 

    changeCropNameHandler= (event) => { 

        this.setState({cropName: event.target.value});  

    } 

    changePasswordHandler= (event) => { 

        this.setState({password: event.target.value}); 

    } 
    changeContactHandler= (event) => { 

        this.setState({contactNo: event.target.value}); 

    } 
    changeLocationHandler= (event) => { 

        this.setState({location: event.target.value}); 

    } 

 

    cancel(){ 

        this.props.history.push('/updateFarmer'); 

    } 

 

    getTitle(){ 

        if(this.state.id === '_add'){ 

            return <h3 className="text-center">Register Farmer</h3> 

        }else{ 

            return <h3 className="text-center">Update Farmer</h3> 

        } 

    } 

    render() { 

         

        return ( 
            
            <div style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: "contain"
            }}>
            <div> 

                <br></br> 

                   <div className = "containername" > 

                        <div className = "rowe"> 

                            <div className = "card col-md-6 offset-md-3 offset-md-3"> 

                                { 

                                    this.getTitle() 

                                } 

                                <div className = "card-body"> 

                                    <form className="formname"> 

                                        <div className = "form-group"> 
                                       
                                            <label> <h4>Farmer ID: </h4></label> 

                                            <input placeholder="Farmer Id" name="id" className="form-control"  

                                                value={this.state.farmerId} onChange={this.changeeIdHandler}/> 

                                        </div> 

                                        <div className = "form-group"> 

                                            <label><h4> Farmer Name:</h4> </label> 

                                            <input placeholder="farmerName" name="name" className="form-control"  

                                                value={this.state.farmerName} onChange={this.changeNameHandler}/> 

                                        </div> 

                             

                                        <div className = "form-group"> 

                                            <label><h4> Email Id:</h4> </label> 

                                            <input placeholder="Email Address" name="emailId" className="form-control"  

                                                value={this.state.emailId} onChange={this.changeEmailHandler}/> 

                                        </div> 
                                        <div className = "form-group"> 

                                        <label> <h4>Password: </h4></label> 

                                        <input placeholder="password" name="password" className="form-control"  

                                         value={this.state.password} onChange={this.changePasswordHandler}/> 

                                         </div> 
 
                                         <div className = "form-group"> 

                                        <label> <h4>location: </h4> </label> 

                                         <input placeholder="location"  name="location" className="form-control"  

                                         value={this.state.location} onChange={this.changeLocationHandler}  /> 

                                          </div> 

                                          <div className = "form-group"> 

                                        <label> <h4> Contact: </h4></label> 

                                        <input placeholder="contact" name="cotact" className="form-control"  

                                         value={this.state.contactNo} onChange={this.changeContactHandler}/> 

                                             </div> 

                                        <button className="btn btn-success" onClick={this.saveOrUpdateFarmer}>Save</button> 

                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> 

                                    </form> 

                                </div> 

                            </div> 

                        </div> 

 

                   </div> 

            </div> 
</div>
        ) 

    } 

} 

 

export default RegisterFarmer;