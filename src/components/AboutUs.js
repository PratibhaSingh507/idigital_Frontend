import { Jumbotron, Card, Container, Row, Col } from 'react-bootstrap';
import img5 from '../images/farm.jpg';

import './app1.css';
import img3 from '../images/nisha.jpg'
import img2 from '../images/pratibha.jpg'
import img4 from '../images/ashwini.jpg'
import img6 from '../images/manoj.jpg'

const AboutUsComponent = () => {
    return (
        <div style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover" }}>
            <div style={{ backgroundColor: 'rgba(15,15,15,0.5)', filter: 'blur(5)', padding: "5px 5px" }}>
                <br></br>
                <Jumbotron style={{ textAlign: "center", color: 'yellow', backgroundColor: 'rgba(30, 180, 255, 0.5)', filter: 'blur(10)', marginLeft: 10, marginRight: 10 }}>
                    <h1><b><i><marquee behavior="scroll" direction="left" scrollamount="15">Farmer Assistance System </marquee></i></b></h1>
                    <p>
                        <i><div style = {{textAlign:"center", color: 'white', fontSize: "25px", fontFamily: "Apple Chancery"}}>
                           Farming Assistance Application is a very useful software for farmers and dealers as they can directly sell and communicate with other dealers. 
                           It also provides an option to view Advertisements posted by the dealer(s). Farmer will get an option to complaint against
                           dealer incase of any greviance.
                           </div>       
                    </i>
                    </p>

                </Jumbotron>
                <br></br>
                <h1 style={{ backgroundColor: 'rgba(15,15,15,0.5)', color: "white" }}><b><i>Team 5- Farmer Assistance System</i></b></h1>
                <br></br>
                {/* MEMBERS */}
                <div class="container">
    <div class="row">
    <div class="col-sm-4">
            <div class="card card-flip h-100">
                <div class="card-front text-white"style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body">
                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                      <h3 class="card-title">Pratibha Singh</h3>
                        <p class="card-text">Java Full Stack Developer</p>
                        
                    </div>
                </div>
                <div class="card-back bg-white"style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body text-white">
                    
                        <h3 class="card-title">Complaint Module</h3>
                        <p class="card-text">Customer can make complaint on dealers</p>
                       {/* <a href="#" class="btn btn-outline-primary">Action</a>*/}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card card-flip h-100">
                <div class="card-front text-white" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body">
                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                        <h3 class="card-title">Nisha</h3>
                        <p class="card-text">Java Full Stack Developer</p>
                       
                       
                    </div>
                </div>
                <div class="card-back bg-white" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body text-primary">
                   
                    <h3 class="card-title">Delaer Module</h3>
                        <p class="card-text">Dealer will register and login to use services</p>
                       {/* <a href="#" class="btn btn-outline-primary">Action</a>*/}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card card-flip h-100">
                <div class="card-front text-white "style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body">
                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                        <h3 class="card-title">Ashwini</h3>
                        <p class="card-text">Java Full Stack Developer</p>
                       
                    </div>
                </div>
                <div class="card-back bg-white"style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body text-primary">
                    
                        <h3 class="card-title">Dealer Module</h3>
                        <p class="card-text">Dealer will be able to post Advertisements and can view complaints</p>
                       {/* <a href="#" class="btn btn-outline-primary">Action</a>*/}
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="row"> 
        <div class="col-sm-4 mt-5" >
            <div class="card card-flip h-100">
                <div class="card-front text-white "style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body">
                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                        <h3 class="card-title">Manoj</h3>
                        <p class="card-text">Java Full Stack Developer</p>
                        
                    </div>
                </div>
                <div class="card-back bg-white"style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body text-primary">
                   
                        <h3 class="card-title">Farmer Module</h3>
                        <p class="card-text">Farmer will Login/Register to use the services</p>
                        {<a href="#" class="btn btn-outline-primary">Action</a>}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-5" >
            <div class="card card-flip h-100">
                <div class="card-front text-white"style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body">
                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                        <h3 class="card-title">Vamsi</h3>
                        <p class="card-text">Java Full Stack Developer</p>
                    </div>
                </div>
                <div class="card-back bg-white"style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body text-primary">
                        <h3 class="card-title">Farmer Module</h3>
                        <p class="card-text">Farmer can sell crops and can make contact dealer</p>
                      {/*  <a href="#" class="btn btn-outline-primary">Action</a>*/}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-5">
            <div class="card card-flip h-100">
                <div class="card-front text-white" style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body">
                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                        <h3 class="card-title">Pranesh</h3>
                        <p class="card-text">Java Full Stack Developer</p>
                    </div>
                </div>
                <div class="card-back bg-white"style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)'}}>
                    <div class="card-body text-primary">
                        <h3 class="card-title">Admin Module</h3>
                        <p class="card-text">Admin will be able to view farmers, delaers and complaints</p>
                      {/*  <a href="#" class="btn btn-outline-primary">Action</a>*/}
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>
</div>
</div>

    );
}

export default AboutUsComponent;