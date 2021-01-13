import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function registerRequest(registerData) {
    let body = {
        "email": registerData.email,
        "password": registerData.password,
        "name": registerData.firstName,
        "surname": registerData.lastName,
        "phoneNr": registerData.phoneNumber,
        "birthdate": registerData.dateOfBirth,
        "address": registerData.address
    };
    return axios.post(`${baseUrl}users/register`, body);
}

// {
//     "email": "test123@test.com",
//     "password": "password2",
//     "name": "Jan",
//     "surname": "Kowalski",
//     "phoneNr": 123456789,
//     "birthdate": "1990-01-01",
//     "address": "20;Szkolna;Krakow;54-432"
// }