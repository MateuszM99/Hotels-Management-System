import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function addRoomRequest(roomInfo) {
    // return axios.post(`${baseUrl}rooms`, roomInfo, { headers: { 'Authorization': basicToken } });
    return axios.post(`${baseUrl}rooms`, roomInfo);
}