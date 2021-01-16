import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getAllEmployees(jwtToken) {
    return axios.get(`${baseUrl}admin/employees`, {headers: {'Authorization': "Bearer " + jwtToken}});
}

export function deleteEmployee(employeeId, jwtToken) {
    return axios.delete(`${baseUrl}admin/employees/` + employeeId, {headers: {'Authorization': "Bearer " + jwtToken}});
}

export function addEmployee(registerData, jwtToken) {
    let registerEmployeeBody = {
        "email": registerData.email,
        "password": registerData.password,
        "name": registerData.name,
        "surname": registerData.surname,
        "phoneNr": registerData.phoneNr,
        "birthdate": registerData.birthDate,
        "address": registerData.address,
        "position": registerData.position,
        "salary": registerData.salary
    };
    return axios.post(`${baseUrl}admin/employees/`, registerEmployeeBody, {headers: {'Authorization': "Bearer " + jwtToken}});
}