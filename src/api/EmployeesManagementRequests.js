import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getAllEmployees(jwtToken) {
    return axios.get(`${baseUrl}admin/employees`,{ headers: { 'Authorization': "Bearer " + jwtToken } });
}