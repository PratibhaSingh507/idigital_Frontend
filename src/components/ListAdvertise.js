import React, { Component } from 'react';
import AdvertiseServices from '../Services/AdvertiseServices';

class ListAdvertise extends Component {
    constructor(props) {
        super(props)

        this.state = {
            advertisement: []
        }
        this.addAdvertise = this.addAdvertise.bind(this);
        this.deleteAdvertise = this.deleteAdvertise.bind(this);
    }

    deleteAdvertise(id){
        AdvertiseServices.deleteAdvertise(id).then( res => {
            this.setState({advertisement: this.state.advertisement.filter(advertise => advertise.aid !== id)});
        });
    }

    viewAllAdvertise(){
        AdvertiseServices.getAdvertisement().then((res) => {
            console.log(res.data);
            this.setState({ advertisement: res.data.advList});
        });
    }

    componentDidMount(){
      
    }

    addAdvertise(){
        this.props.history.push('/add-advertise/_add');
    }
    cancel(){
        this.props.history.push('/dealer-home');
    }
    render() {
      
        this.viewAllAdvertise();
        return (
            
            // <div>
                 <div style={{backgroundImage: 'linear-gradient(to right, white, lightgreen)',}}>
        <div style={{
            backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)',
            display:"flex",
            justifyContent:"center",
           padding:"30px 30px"
       }}></div>


                 <h2 className="text-center">Advertisement List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAdvertise}> Add Advertise</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Advertise Id</th>
                                    <th> Dealer Name</th>
                                    <th> Dealer Contact</th>
                                    <th> Crop Name</th>
                                    <th> Crop Quantity</th>                                
                                    <th> Crop Price</th>
                                   <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.advertisement.map(
                                        advertise => 
                                        <tr key = {advertise.aid}>
                                            <td> { advertise.aid} </td> 
                                            <td> { advertise.name} </td>   
                                               
                                             <td> {advertise.contact}</td>
                                             <td> { advertise.cropname} </td> 
                                             <td> {advertise.quantity}</td>
                                             <td> {advertise.unit}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAdvertise(advertise.aid)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <button className="btn btn-dark" onClick={this.cancel.bind(this)}>Back</button>
            </div>
        )
    }
}

export default ListAdvertise