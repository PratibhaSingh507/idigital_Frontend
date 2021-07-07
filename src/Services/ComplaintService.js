import axios from 'axios';


const CANDIDATE_API_BASE_URL = "http://ec2-34-230-61-132.compute-1.amazonaws.com:8081/complaint";

class ComplaintService {

    addComplaint(complaint,farmerId, dealerId) {
        return axios.post(CANDIDATE_API_BASE_URL+'/add_complaint/' + farmerId + '/' + dealerId, complaint);
    }
    getComplaintById(complaintId){
        return axios.get(CANDIDATE_API_BASE_URL+'/'+complaintId);
    }
    getAllComplaints(){
        return axios.get(CANDIDATE_API_BASE_URL+'/getAll');
    }
    getComplaintByFarmer(farmerId){
        return axios.get(CANDIDATE_API_BASE_URL+'/farmer/' + farmerId);
    }
    getComplaintByDealer(dealerId){
        return axios.get(CANDIDATE_API_BASE_URL+'/dealer/' + dealerId);
    }
    deleteComplaint(cid){
        return axios.delete(CANDIDATE_API_BASE_URL+'/delete/'+cid);
    }
}
export default new ComplaintService();