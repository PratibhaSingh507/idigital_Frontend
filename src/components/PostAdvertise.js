import React, { Component } from 'react'
import AdvertiseServices from '../Services/AdvertiseServices';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faLeaf} from "@fortawesome/free-solid-svg-icons";

const numberRegex = RegExp(
    /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
  );

  const nameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);

  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
   Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
class PostAdvertise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // step 2
            id: this.props.match.params.id,
            cropname: '',
            quantity: '',
            contact: '',
            name:'',
            unit:'',

            formErrors: {
                cropname: "",
                quantity: "",
                contact: "",
                name:"",
                unit:""
                
              }

        };
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCropnameHandler = this.changeCropnameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeUnitHandler = this.changeUnitHandler.bind(this);
        this.saveOrUpdateAdvertise = this.saveOrUpdateAdvertise.bind(this);
    }

  
    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            let aid= this.state.id;
            AdvertiseServices.getAdvertiseById(aid).then( (res) =>{
                let advertise = res.data;
                console.log(JSON.stringify(advertise));
                this.setState({
                    // aid: advertise.aid,
                    name: advertise.name,
                    cropname: advertise.cropname,
                    quantity: advertise.quantity,
                    contact : advertise.contact,
                    unit : advertise.unit
                });
            });
        }        
    }



    saveOrUpdateAdvertise = (e) => {
        e.preventDefault();
        let advertise = {name: this.state.name,cropname: this.state.cropname, quantity: this.state.quantity, contact: this.state.contact, unit: this.state.unit};

        // step 5
        if(this.state.id === '_add'){
           
            
            AdvertiseServices.createAdvertise(advertise).then(res =>{
               
                this.props.history.push('/advertisement');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCropnameHandler= (event) => {
        this.setState({cropname: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }

    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changeUnitHandler= (event) => {
        this.setState({unit: event.target.value}); 
    }


    cancel(){
        this.props.history.push('/advertisement');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Advertisement</h3>
        }
        
    }

    //----------
    handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
              --SUBMITTING--
               Name: ${this.state.name}
               Cropname:${this.statr.cropname}
               Quantity:${this.state.quantity}
               Contact Number: ${this.state.contact}               
               Unit:${this.state.unit}
              
            `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { n, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (n) {
          case "name":
            formErrors.name = nameRegex.test(value)
            ? ""
            : "invalid Name ";
            break;
          case "cropname":
            formErrors.cropname = nameRegex.test(value)
            ? ""
            : "invalid Crop Name ";
            break;
          case "contact":
            formErrors.contact = numberRegex.test(value)
              ? ""
              : "invalid Contact Number";
            break;
            case "unit":
             formErrors.unit = 
                value.length < 3 ? "minimum 2 characaters required" : "";
            break;
            case "quantity":
             formErrors.quantity = numberRegex.test(value)
               ? ""
              : "invalid Quantity ";
             break;
    
          default:
            break;
        }
    
        this.setState({ formErrors, [n]: value }, () => console.log(this.state));
      }; 
    render() {
        const { formErrors } = this.state;
        return (
            
                 <div style={{backgroundImage: 'linear-gradient(to right, black, lightgreen)',}}>
        <div style={{
            backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)',
            display:"flex",
            justifyContent:"center",
           padding:"40px 40px"
       }}></div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                       

                        <Form.Group controlId="formBasicName">
                               <Form.Label>Enter Name :</Form.Label>
                           <InputGroup>
                           <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                            </InputGroup.Prepend>
                        <Form.Control className={formErrors.name.length > 0 ? "error" : null} autoComplete="off" type="text" name="name" placeholder="eg.jasmin" value={this.state.name} onChange={this.changeNameHandler} />
                    </InputGroup>
                   {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                  )}
               </Form.Group>

               <Form.Group controlId="formBasicContactNumber">
                   <Form.Label>Enter Contact Number :</Form.Label>
                   <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control className={formErrors.contact.length > 0 ? "error" : null} autoComplete="off" type="contact"name="contact" value={this.state.contact} onChange={this.changeContactHandler}  id="contact"  placeholder="eg.9132432376" />
                   </InputGroup>
                   {formErrors.contact.length > 0 && (
                    <span className="errorMessage">{formErrors.contact}</span>
                  )}
               </Form.Group>
                                     
<Form.Group controlId="formBasicName">
                               <Form.Label>Enter Crop Name :</Form.Label>
                           <InputGroup>
                           <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faLeaf} /></InputGroup.Text>
                            </InputGroup.Prepend>
                        <Form.Control className={formErrors.cropname.length > 0 ? "error" : null} autoComplete="off" type="text" name="cropname" placeholder="eg.rice" value={this.state.cropname} onChange={this.changeCropnameHandler} />
                    </InputGroup>
                   {formErrors.cropname.length > 0 && (
                    <span className="errorMessage">{formErrors.cropname}</span>
                  )}
               </Form.Group>
                                       
               <Form.Group controlId="formBasicContactNumber">
                   <Form.Label>Enter Crop Price :</Form.Label>
                   <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><FontAwesomeIcon icon={faLeaf} /></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control className={formErrors.unit.length > 0 ? "error" : null} autoComplete="off" type="unit"name="unit" value={this.state.unit} onChange={this.changeUnitHandler}  id="unit"  placeholder="eg.20/kg" />
                   </InputGroup>
                   {formErrors.unit.length > 0 && (
                    <span className="errorMessage">{formErrors.unit}</span>
                  )}
               </Form.Group>   

               <Form.Group controlId="formBasicName">
                               <Form.Label>Enter Crop Quantity :</Form.Label>
                           <InputGroup>
                           <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faLeaf} /></InputGroup.Text>
                            </InputGroup.Prepend>
                        <Form.Control className={formErrors.quantity.length > 0 ? "error" : null} autoComplete="off" type="quantity" name="quantity" placeholder="eg.120" value={this.state.quantity} onChange={this.changeQuantityHandler} />
                    </InputGroup>
                   {formErrors.quantity.length > 0 && (
                    <span className="errorMessage">{formErrors.quantity}</span>
                  )}
               </Form.Group>                   


                                        <br/>
               <Form.Group controlId="formBasicButton">
                  <Button variant="success" type="submit" onClick={this.saveOrUpdateAdvertise}disabled={this.state.name.length === 0 || this.state.cropname.length === 0 || this.state.contact.length === 0 || this.state.quantity.length === 0 || this.state.unit.length === 0 } style={{padding: "7px 80px", marginLeft:"0px"}}> SUBMIT </Button>
               </Form.Group>
                                 <br/>       {/* <button className="btn btn-success" onClick={this.saveOrUpdateAdvertise}>Save</button> */}
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{padding: "7px 80px", marginLeft:"0px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default PostAdvertise