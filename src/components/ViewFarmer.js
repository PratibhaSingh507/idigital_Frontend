import React, { Component } from 'react' 

import FarmerService from '../Services/FarmerService' 
import img6 from '../images/fields.jpg'
 

class ViewFarmer extends Component { 

    constructor(props) { 

        super(props) 
        
        this.state = { 

                farmer: [] 

        } 

        this.registerFarmer = this.registerFarmer.bind(this); 

        this.updateFarmer = this.updateFarmer.bind(this); 

        this.deleteFarmer = this.deleteFarmer.bind(this); 

    } 

 

    deleteFarmer(id){ 

        FarmerService.deleteFarmer(id).then( res => { 

            this.setState({farmer: this.state.farmer.filter(farmer => farmer.farmerId !== id)}); 

        }); 

    } 

    viewFarmer(farmerId){ 

        this.props.history.push('view-farmer/'+farmerId); 

    } 

    updateFarmer(farmerId){ 

        this.props.history.push('/add-farmer/'+farmerId); 

    } 

 

    componentDidMount(){ 

        FarmerService.viewFarmer().then((res) => { 

            console.log(res.data); 

            this.setState({ farmer: res.data}); 

        }); 

    } 

    goBack(){ 

        this.props.history.push('/admin-home'); 

    } 

    registerFarmer(){ 

        this.props.history.push('/add-farmer/_add'); 

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

            <div> 
            <div style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: "contain"
            }}>
                
                 <h2 className="text-center">Farmers List</h2> 

                 {/* <div className = "row"> 

                    <button className="btn btn-primary" onClick={this.registerFarmer}> Register Farmer</button> 

                 </div>  */}

                 <br></br> 

                 <div className = "row"> 

                        <table className = "table table-striped table-bordered"> 

 

                            <thead> 

                                <tr> 
                                    <th> Farmer Id</th> 
                                    <th> Farmer Name</th> 
                                    <th> Email Id</th> 
                                    <th> Password</th> 
                                    
                                    <th> Location</th> 
                                    <th> Contact Number</th> 
                                    <th> Actions</th> 

                                </tr> 

                            </thead> 

                            <tbody> 

                                { 

                                    this.state.farmer.map( 

                                        farmers =>  

                                        <tr key = {farmers.farmerId}> 

                                              <td> { farmers.farmerId} </td>    

                                             <td> { farmers.farmerName} </td> 
                                             <td> {farmers.emailId}</td>
                                             <td> {farmers.password}</td>   

                                            
                                             <td> {farmers.location}</td>
                                             <td> {farmers.contactNo}</td>
                                              


                                             <td> 

                                                 <button onClick={ () => this.updateFarmer(farmers.farmerId)} className="btn btn-info">Update </button> 

                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFarmer(farmers.farmerId)} className="btn btn-danger">Delete </button> 

                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewFarmer(farmers.farmerId)} className="btn btn-info">View </button> 

                                             </td> 

                                        </tr> 

                                    ) 

                                } 

                            </tbody> 

                        </table> 

 
</div>


<button className="btn btn-danger" onClick={this.goBack.bind(this)} style={{marginLeft: "10px"}}>Back</button> 
                 </div> 
             

                 </div>      </div> 
                
 
</div>
        ) 

    } 

} 

 

export default ViewFarmer;