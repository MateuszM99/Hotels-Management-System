import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function createReservation(interval, roomId) {
    var body = {
        "roomIds": [
            roomId
        ],
        "interval": {
            "startDate": interval.startDate,
            "endDate": interval.endDate
        }
    }
    return axios.post(`${baseUrl}reservations`, body, {headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken")}});
}

export function getReservations() {
    return axios.get(`${baseUrl}reservations`, {headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken")}});
}

export function getAllReservations() {
    return axios.get(`${baseUrl}admin/reservations`, {headers: {'Authorization': "Bearer " + localStorage.getItem("jwtToken")}});
}
