import axios from 'axios'; 

const ADVERTISE_API_BASE_URL = "http://ec2-34-230-61-132.compute-1.amazonaws.com:8081/advertisement"; 

class AdvertiseServices { 

    getAdvertisement(){ 
        console.log("ADVERTISE_API_BASE_URL + '/alladv'-->", ADVERTISE_API_BASE_URL + '/alladv')
        return axios.get(ADVERTISE_API_BASE_URL + '/alladv');
         
    } 

    createAdvertise(advertise){ 
        let dealer_Id=2;
        return axios.post(ADVERTISE_API_BASE_URL + '/post/'  + dealer_Id, advertise); 
    } 

    getAdvertiseById(){ 
      let  dealer_Id=2;
        return axios.get(ADVERTISE_API_BASE_URL + '/ViewAdbyId/' + dealer_Id); 
    }

    deleteAdvertise(aid){ 
        return axios.delete(ADVERTISE_API_BASE_URL + '/delete/' + aid); 
    } 
} 

export default new AdvertiseServices()