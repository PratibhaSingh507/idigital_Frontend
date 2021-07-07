import React, {Component} from 'react';
import ComplaintService from '../Services/ComplaintService'
import { Form, Jumbotron, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DealerService from '../Services/DealerService';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FarmerService from '../Services/FarmerService';

const idPattern = /[0-9]+/;
const ApiError =(props)=>{
    return(
        <div className="alert alert-danger font-weight-bold" role="alert" 
        style={{color:"red", fontSize:18}}> {props.error} </div>
    )
}

class ComplaintForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            farmerEmail : this.props.match.params.email,
            farmerName:"",
            farmerId:"",
            dealers:[],
            dealerId:"",
            dealerName:"",
            cmessage:"",
            didError:"",
            apiError:""
        };
        this.changeFarmerNameHandler = this.changeFarmerNameHandler.bind(this);
        this.changeFarmerIdHandler = this.changeFarmerIdHandler.bind(this);
        this.changeDealerNameHandler = this.changeDealerNameHandler.bind(this);
        this.changecmessageHandler = this.changecmessageHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }
   
componentDidMount()
  {
      let farmer= {};
    DealerService. getDealers()
    .then(response => {
      this.setState({dealers:response.data})
    });

    FarmerService.viewFarmer().then(response=> {
        farmer = response.data.filter(f=>f.emailId === this.state.farmerEmail);
        this.setState({farmerName: farmer.map(f=> f.farmerName),
        farmerId: farmer.map(f=> f.farmerId)
        });
        console.log(this.state.farmerName);
        console.log(this.state.farmerId);
        
    })
  }
  
  validate = () =>
  {
      let didError="";
      
        if(!idPattern.test(this.state.dealerId))
        {
            didError="Invalid Input";
        }

        if(didError)
        {
            this.setState({didError});
            return false;
        }
        return true;
  };


handleSubmit = (e)=>{
      e.preventDefault();
      const isValid = this.validate();

//       let complaint = {farmerName:this.state.farmerName,farmerId:this.state.farmerId,
//   dealerId:this.state.dealerId, dealerName:this.state.dealerName, cmessage:this.state.cmessage};
 
  let complaint = {cmessage:this.state.cmessage};
  if(isValid){
    if(window.confirm("Are you sure?"))
    {
        ComplaintService.addComplaint(complaint, this.state.farmerId, this.state.dealerId)
        .then(res => {
            this.props.history.push(`/farmer-home/${this.state.farmerEmail}`);
            toast.success("Complaint added successfully !!!", 
            {
                position: toast.POSITION.marginLeft,
                autoclose: 2000
            })}
            ).catch(error => {
                console.log(error.response.data.message);
                this.setState({apiError: error.response.data.message })
                
            });
     }
  }
}


clearForm=(event) => {
    this.setState(
        
        {
            dealerId:"",
            dealerName:"",
            cmessage:"",
            didError:"",
            apiError:""
        }
    );
    console.log(this.state.dealers);
  }

  
  
  changeFarmerNameHandler = (event)=>{
      this.setState({farmerName: event.target.value});
  }

  changeFarmerIdHandler = (event)=>{
      this.setState({farmerId: event.target.value,
    apiError: ""});
  }

  changeDealerNameHandler = (event)=>{
      this.setState({dealerName: event.target.value});
  }

  changeDealerIdHandler=(event)=>{
    this.setState({dealerId:event.target.value,
    apiError:""});
  }
  changecmessageHandler = (event)=>{
      this.setState({cmessage: event.target.value});
  }


    render(){
        let error = "";
        if(this.state.apiError)
        {
            error = (<ApiError error = {this.state.apiError}/>)
        }
    return (
      
        <div style={{backgroundImage: 'linear-gradient(to right, black, lightgreen)',}}>
        <div style={{
            backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)',
            display:"flex",
            justifyContent:"center",
           padding:"40px 40px"
       }}>
             <Jumbotron style={{width: 600, backgroundColor:'hsl(50, 33%, 25%)', filter: 'blur(10)', color: 'white'}}>
                <h1 style={{fontFamily:"cursive"}}>Submit Your Complaint</h1>
                {error}
                <br/>
                <Form onSubmit={this.handleSubmit} style={{textAlign:"left"}}>
                    <Form.Group >
                        <Form.Label>Enter your Name</Form.Label>
                        <Form.Control type="text" id="name" name="name" value = {this.state.farmerName} required readOnly />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Id</Form.Label>
                        <Form.Control type="text" id="farmerid" name="farmerid" value = {this.state.farmerId} required readOnly/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Complaint Against</Form.Label>
                        <Form.Control as="select" id="dealerName" name="dealerName" value={this.state.dealerName}
                        onChange={this.changeDealerNameHandler} required>
                        <option>Select Dealer</option>
                        {
                             this.state.dealers.map( dealer=>
                                    <option key={dealer.dealerId}>
                                        {dealer.dealerName} (Id No: {dealer.dealerId})
                                    </option>
                                    )
                        }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter DealerId</Form.Label>
                        <Form.Control type="text" id="dealer" name="dealerid" placeholder="Enter DealerId" 
                         value={this.state.dealerId} onChange={this.changeDealerIdHandler} required/>
                        <Form.Text style={{color:"olive"}}>
						    (Enter Dealer's Id mentioned with selected Dealer's name)
    				    </Form.Text>
                        <div style={{fontSize:15, color:"yellow"}}>{this.state.didError}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Details of your Complaint</Form.Label>
                        <Form.Control as="textarea" id="message" name="message" placeholder="Description" rows={3} 
                        value = {this.state.cmessage} onChange = {this.changecmessageHandler} required/>
                    </Form.Group>
                    <br/>
                     <Form.Group>
                        <Button variant="success" type="submit" id="btnsubmit" style={{marginLeft:"150px", paddingLeft:"20px", paddingRight:"20px"}}>Submit</Button>
                        <Button variant="secondary" type="reset" id="btnsubmit" style={{marginLeft:"40px", paddingLeft:"26px", paddingRight:"26px"}} onClick = {this.clearForm}>Clear</Button>
                    </Form.Group>
                </Form>
                <Link to={`/farmer-home/${this.state.farmerEmail}`}>
                    <Button variant="info" 
                            type="back" id="btnback" 
                            style={{paddingLeft:"24px", paddingRight:"24px"}}> 
                            <FontAwesomeIcon icon={faArrowLeft}/>  Back</Button>
                </Link>
            </Jumbotron>
            </div>
        </div>
      
      );

    }

}
 
export default ComplaintForm;