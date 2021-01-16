import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getAllEmployees(jwtToken) {
    return axios.get(`${baseUrl}admin/employees`,{ headers: { 'Authorization': "Bearer " + jwtToken } });
}

export function deleteEmployee(employeeId, jwtToken) {
    return axios.delete(`${baseUrl}admin/employees/` + employeeId,{ headers: { 'Authorization': "Bearer " + jwtToken } });
}