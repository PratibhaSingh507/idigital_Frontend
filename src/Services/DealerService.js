import axios from 'axios';
const DEALER_API_BASE_URL ="http://ec2-3-213-87-91.compute-1.amazonaws.com:8081/dealer";

class DealerService {
    getDealers() {
        console.log("DEALER_API_BASE_URL + '/viewDealer'-->",DEALER_API_BASE_URL + '/viewDealer')
        return axios.get(DEALER_API_BASE_URL + '/viewDealer');
    }
    addDealer(dealer) {
        return axios.post(DEALER_API_BASE_URL + '/add' , dealer);
    }
    updateDealer(dealer) {
        return axios.put(DEALER_API_BASE_URL + '/update' , dealer);
    }
    dealerLogin(dealerLogin) {
         return axios.post(DEALER_API_BASE_URL + '/login',dealerLogin);
     }
     viewDealerById(dealerId){ 
        return axios.get(DEALER_API_BASE_URL + '/viewDealer/' + dealerId);  
     } 
     
    deleteDealer(dealerId){ 
        return axios.delete(DEALER_API_BASE_URL + '/deleteDealer/' + dealerId); 
    } 
}
export default new DealerService();