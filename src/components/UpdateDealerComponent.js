import React, { Component } from 'react' 

import DealerService from '../Services/DealerService'; 

 

class UpdateDealerComponent extends Component { 

    constructor(props) { 

        super(props) 

 

        this.state = { 

            // step 2 

            id: this.props.match.params.id, 

            dealerId: '', 

            dealerName: '', 

            dealerContactNumber: '', 

            dealerEmailId: '' ,

            dealerPassword: ''

        } 

        this.changeNameHandler = this.changeNameHandler.bind(this); 

        this.changeeIdHandler = this.changeeIdHandler.bind(this); 

        //this.changeContactNumber = this.changeContactNumber.bind(this);

        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this); 

 

        this.changePasswordHandler = this.changePasswordHandler.bind(this); 

 

        this.saveOrUpdateDealer = this.saveOrUpdateDealer.bind(this); 

    } 

 

    // step 3 

    componentDidMount(){ 

 

        // step 4 

        if(this.state.id === '_add'){ 

            return 

        }else{ 

            let dealerId= this.state.id; 

            DealerService.viewDealerById(dealerId).then( (res) =>{ 

                let dealer = res.data; 

                console.log(JSON.stringify(dealer)); 

                this.setState({ 

                    dealerId: dealer.dealerId, 

                    dealerName: dealer.dealerName, 

                    dealerContactNumber: dealer.dealerContactNumber, 

                    dealerEmailId : dealer.dealerEmailId,

                    dealerPassword : dealer.dealerPassword


                }); 

            }); 

        }         

    } 

    saveOrUpdateDealer = (d) => { 

       
        let dealer = {dealerName: this.state.dealerName,
            dealerContactNumber: this.state.dealerContactNumber,
             dealerId: this.state.dealerId, 
             dealerEmailId: this.state.dealerEmailId ,
             dealerPassword: this.state.dealerPassword}; 
             d.preventDefault(); 

        

 

        // step 5 

        if(this.state.id === '_add'){ 

            

            DealerService.createDealer(dealer).then(res =>{ 

                

                this.props.history.push('/dealers'); 

            }); 

        }else{ 

            DealerService.updateDealer(dealer, this.state.dealerId).then( res => { 

                

                this.props.history.push('/dealers'); 

            }); 

        } 

    } 

     

    changeNameHandler= (event) => { 

        this.setState({dealerName: event.target.value}); 

    } 

 

    changeeIdHandler= (event) => { 

        this.setState({dealerId: event.target.value}); 

    } 



    changeContactNumberHandler= (event) => { 

        this.setState({dealerContactNumber: event.target.value});  

    } 

 

    changeEmailIdHandler= (event) => { 

        this.setState({dealerEmailId: event.target.value}); 

    } 

 

   

 

    
    changePasswordHandler= (event) => { 

        this.setState({dealerPassword: event.target.value});  

    } 

 

 

    cancel(){ 

        this.props.history.push('/dealers'); 

    } 

 

    getTitle(){ 

        if(this.state.id === '_add'){ 

            return <h3 className="text-center">Register Dealer</h3> 
        
        }else{ 

            return <h3 className="text-center">Update Dealer</h3> 

        } 

    } 

    render() { 

         

        return ( 

            <div> 

                <br></br> 

                   <div className = "container"> 

                        <div className = "row"> 

                            <div className = "card col-md-6 offset-md-3 offset-md-3"> 

                                { 

                                    this.getTitle() 

                                } 

                                <div className = "card-body"> 

                                    <form> 

                                        <div className = "form-group"> 

                                            <label> Dealer id: </label> 

                                            <input placeholder=" Enter Dealer Id" 
                                                
                                                name="dealerId" className="form-control" title="Enter Dealer Id. eg. 1" required

                                                value={this.state.dealerId} onChange={this.changeeIdHandler}/> 

                                        </div> 

                                        <div className = "form-group"> 

                                            <label> Dealer Name: </label> 

                                            <input type="text" placeholder="Enter Name"  pattern="[A-Za-z]"
                                                
                                                name="name" className="form-control" title="Name should only contain alphabets." required

                                                value={this.state.dealerName} onChange={this.changeNameHandler}/> 

                                        </div> 

                                        <div className = "form-group"> 

                                            <label> Employee Contact Number: </label> 

                                            <input type="number" placeholder=" Enter Contact Number" 
                                            
                                                name="contact number" title="Contact Number should contain 10 digits." className="form-control" pattern="[2-9] {1} [0-9] {9}"
                                                
                                                required

                                                value={this.state.dealerContactNumber} onChange={this.changeContactNumberHandler}/> 

                                        </div> 

                                        <div className = "form-group"> 

                                            <label> Email Id: </label> 

                                            <input type= "text" placeholder=" Enter Email Address" name="emailId" className="form-control" 

                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required

                                                title="e.g. abc@gmail.com"

                                                value={this.state.dealerEmailId} onChange={this.changeEmailIdHandler}/> 

                                        </div> 
                                        <div className = "form-group"> 

                                            <label> Password: </label> 

                                            <input type="password" placeholder="Enter Password" name="password" className="form-control"  

                                                value={this.state.dealerPassword} onChange={this.changePasswordHandler} required/> 

                                        </div> 


 

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDealer}>Save</button> 

                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> 

                                    </form> 

                                </div> 

                            </div> 

                        </div> 

 

                   </div> 

            </div> 

        ) 

    } 

} 

 

export default UpdateDealerComponent;