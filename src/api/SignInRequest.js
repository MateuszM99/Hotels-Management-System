import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function loginRequest(basicToken) {
    return axios.post(`${baseUrl}users/login`, {}, { headers: { 'Authorization': basicToken } });
}