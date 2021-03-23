import axios from 'axios'
import { BASE_URL } from './initOption.properties';

export const API = {
    get : async function (endPoint, input) {
        let headers = {
            "content-type": "text/plain"
        };

        let token = localStorage.getItem("token");
        if(token !== null)
            headers.Authorization = `Bearer ${token}`;
        
        let config = {
            headers : headers,
            params : input
        }

        try {
            const response = await axios.get(BASE_URL + endPoint, config);
            return response;
        } catch (error) {
            return error.response;
        }      
    },
    post : async function (endPoint, input){
        let headers = {
            "content-type": "text/plain"
        };
        try {
            const response = await axios.post(BASE_URL + endPoint, input, { headers: headers });
            return response;
        } catch (error) {
            return error.response;
        }
    }
}