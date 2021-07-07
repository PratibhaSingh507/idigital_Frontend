import axios from 'axios';

//const FARMER_API_BASE_URL = "http://localhost:9093/farmer";
const FARMER_API_BASE_URL = "http://ec2-34-230-61-132.compute-1.amazonaws.com:8081/farmer";



class FarmerService { 
  
    farmerLogin(farmLogin) {
        return axios.post(FARMER_API_BASE_URL + '/loginFarmer', farmLogin);
    }

    viewFarmer(){ 

        return axios.get(FARMER_API_BASE_URL + '/viewFarmer'); 

    } 

    // farmerLogin(farmer){
    //     return axios.post(FARMER_API_BASE_URL+'/loginFarmer', farmer);
    // }
    // getAllFarmer(){
    //     return axios.get(FARMER_API_BASE_URL+'/viewFarmer');
    // }

    registerFarmer(farmer){ 

        return axios.post(FARMER_API_BASE_URL + '/registerFarmer', farmer); 

    } 

 

    viewFarmerById(farmerId){ 

         return axios.get(FARMER_API_BASE_URL + '/viewFarmer/' + farmerId); 
        

    } 

 

    updateFarmer(farmer,farmerId){ 

        return axios.put(FARMER_API_BASE_URL + '/updateFarmer/'  , farmer); 

    } 

 

    deleteFarmer(farmerId){ 

        return axios.delete(FARMER_API_BASE_URL + '/deleteFarmer/' + farmerId); 

    } 

    viewAdvertisements(){ 

        return axios.get(FARMER_API_BASE_URL + '/viewAdvertisement'); 

    } 


} 

 

export default new FarmerService();