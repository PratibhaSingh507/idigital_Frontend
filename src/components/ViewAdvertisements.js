import React, { Component } from 'react';

import FarmerService from '../Services/FarmerService' 
import img6 from '../images/fields.jpg'

class ViewAdvertisements extends Component {

    constructor(props) { 

        super(props) 

      this.state = { 

         advertisement: []
        } 

    } 

    goBack(){ 

        this.props.history.push(`/farmer-home/${this.state.emailId}`); 

    } 

componentDidMount(){

    FarmerService.viewAdvertisements().then((Response)=>{
        this.setState({advertisement:Response.data})
    });

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
      
        <div className = "container"> 
        <div style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: "contain"
            }}>
               <div className = "row"> 

<table className = "table table-striped table-bordered"> 



    <thead> 

        <tr> 

            <th> Advertisement Id</th> 

            <th> Crop Name</th> 

            <th> Quantity</th> 

            <th> Contact Number</th> 
            <th> Dealer Name</th> 
            <th> Unit</th> 
            
            
        </tr> 

    </thead> 

    <tbody> 

        { 

            this.state.advertisement.map( 

                advertisements =>  

                <tr key = {advertisements.aid}> 

                      <td> { advertisements.aid} </td>    

                     <td> { advertisements.cropname} </td>    

                     <td>  { advertisements.quantity}</td> 

                     <td> {advertisements.contact}</td>
                     <td> {advertisements.name}</td>
                     <td> {advertisements.unit}</td>
                   
                      
                </tr> 

            ) 

        } 

    </tbody> 

</table> 



</div> </div>

<button className="btn btn-danger" onClick={this.goBack.bind(this)} style={{marginLeft: "10px"}}>Back</button> 
                </div> 
         </div>
        
         </div>       
                
    );
  }
}

export default ViewAdvertisements