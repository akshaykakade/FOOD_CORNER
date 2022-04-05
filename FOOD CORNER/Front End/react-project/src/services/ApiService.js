import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    authenticateUser(email,password) {
        //return axios.post(USER_API_BASE_URL+'/authenticate?email='+email+"&password="+password);
        return axios.post(USER_API_BASE_URL+"/authenticate",{email:email,password:password});
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL+"/adduser", user);
    }

    sendOrder(order,uid){
        return axios.post(USER_API_BASE_URL+'/placeorder/'+uid,order);
    }

    checkEmail(email){
        return axios.post(USER_API_BASE_URL+'/checkUser/'+email);
    }

}

export default new ApiService();