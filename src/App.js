import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import HomeComponent from './components/Home';
import AdminLoginComponent from './components/AdminLogin';
import FarmerLogin from './components/FarmerLogin';
import AboutUsComponent from './components/AboutUs';
import FarmerRegistration from './components/FarmerRegistration';
import AdminRegistration from './components/AdminRegistration';
import ViewAdvertisements from './components/ViewAdvertisements';
import ComplaintForm from './components/ComplaintForm';
import ListComplaint from './components/ListComplaint';
import AdminHome from './components/AdminHome';
import ListDealerComponent from './components/ListDealerComponent';
import ListFarmerComponent from './components/ListFarmerComponent';
import FarmerHome from './components/FarmerHome';
import ViewFarmer from './components/ViewFarmer';
import ViewFarmerById from './components/ViewFarmerById';
import RegisterFarmer from './components/RegisterFarmer';
import FarmerComplaint from './components/FarmerComplaint';
import DealerComplaint from './components/DealerComplaint';
import ListCropComponent from './components/ListCropComponent';
import SellCropComponent from './components/SellCropComponent';
import ViewCropComponent from './components/ViewCropComponent';
import AddCrop from './components/AddCrop';
import DealerHome from './components/DealerHome';
import DealerLogin from './components/DealerLogin';
import DealerLogout from './components/DealerLogout';
import RegisterDealer from './components/RegisterDealer';
import UpdateDealerComponent from './components/UpdateDealerComponent';
import ViewDealer from './components/ViewDealer';
import ViewDealerById from './components/ViewDealerById';
import PostAdvertise from './components/PostAdvertise'
import AddAdvertise from './components/AddAdvertise'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListAdvertise from './components/ListAdvertise';
import FarmerList from './components/FarmerList'
import Footer from './components/footer';
import DealerRegister from './components/DealerRegister';
toast.configure()
function App() {
  return (
    <div className="App">

      {/* NAVIGATION BAR COMPONENT FROM BOOTSTRAP */}
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 70 }}>
        <Navbar.Brand href="/" style={{ fontFamily: "Forte" }}>
          {' '}
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Link to='/' style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">About Us</Nav.Link>
            </Link>
            {/* <Link to='/'  style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">Logout</Nav.Link>
            </Link> */}

          </Nav>

        </Navbar.Collapse>
      </Navbar>
      {/* Some Common Components if required at all */}

      {/* Switching the content from nav operations */}
      <Switch>

        <Route path='/' component={HomeComponent} exact />
        <Route path='/adminLogin' component={AdminLoginComponent} exact />     
        <Route path='/about' component={AboutUsComponent} exact />
        <Route path='/adminRegistration' component={AdminRegistration} exact />
        <Route path='/admin-home' component={AdminHome} exact />
        <Route path='/viewComplaint' component={ListComplaint} exact />
        <Route path='/viewFarmer' component={ListFarmerComponent} exact />
        <Route path='/viewDealer' component={ListDealerComponent} exact />
        <Route path='/updateFarmer' component={ViewFarmer} exact />



        <Route path = "/home" component = {FarmerLogin}></Route> 

            <Route path = "/signup" component = {FarmerRegistration}></Route> 

            {/* <Route path = "/farmer-home" component = {FarmerHome}></Route>  */}

            <Route path={'/farmer-home/:email'} render={(props)=>
          <FarmerHome {...props} key={props.match.params.email}/> }/>   
            <Route path = "/farmers" component = {FarmerList}></Route>
            <Route path = "/view-farmer/:id" component = {ViewFarmerById}></Route>
               
            <Route path = "/add-farmer/:id" component = {RegisterFarmer}></Route>
            <Route path = "/viewAdvertisements" component = {ViewAdvertisements}></Route>
          {/*  <Route path = "/sellCrop" component = {AddCrop}></Route>*/}
            

        <Route path='/viewComplaint' component={ListComplaint} exact/>
       
    
        
        <Route path={'/addComplaint/:email'} render={(props)=>
        <ComplaintForm {...props} key={props.match.params.email}/> }/> 
     
        <Route path={'/farmerComplaint/:email'} render={(props)=>
        <FarmerComplaint {...props} key={props.match.params.email}/> }/>
        <Route path={'/dealerComplaint/:email'} render={(props)=>
        <DealerComplaint {...props} key={props.match.params.email}/> }/>
        <Route path="/crop" component={ListCropComponent}></Route>
        <Route path="/sell-crop/:id" component={SellCropComponent}></Route>
        <Route path="/view-crop/:id" component={ViewCropComponent}></Route>
        <Route path = "/add-crop" component = {AddCrop}></Route>

        <Route path="/dealer-home" exact component ={DealerHome}></Route>  
          <Route path="/DealerLogin" exact component ={DealerLogin}></Route>
          <Route path="/dealersignup" exact component ={DealerRegister}></Route> 
          <Route path="/logout" exact component ={DealerLogout}></Route>

            {/* <Route path="/" exact component ={ListDealerComponent}></Route>
            <Route path="/dealers" component ={ListDealerComponent}></Route> */}
            <Route path="/add-dealer/:id" component = {UpdateDealerComponent}></Route> 
             <Route path="/dealers" component = {ViewDealer}></Route> 
             <Route path = "/view-dealer/:id" component = {ViewDealerById}></Route>

            <Route path = "/" exact component = {ListAdvertise}></Route>
                          <Route path = "/advertisement" component = {ListAdvertise}></Route>
                          <Route path = "/add-advertise/:id" component = {PostAdvertise}></Route>
        
      </Switch>
      <Footer></Footer>
      <div class="d-flex flex-column">
        <footer class="footer">
          <div style={{ backgroundColor: '#343A40' }}>
            <span><b style={{ color: "white", fontFamily: "Calibri" }}><i>&copy; A Farmer Assitance Team project.</i></b></span>
          </div>
        </footer>
      </div>
    </div>

  );
}

export default App;
