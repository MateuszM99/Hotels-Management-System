import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getRoomsByHotelId(hotelId) {
    return axios.get(`${baseUrl}rooms/${hotelId}`);
}

export function addRoom(roomInfo) {
    // return axios.post(`${baseUrl}rooms`, roomInfo, { headers: { 'Authorization': basicToken } });
    return axios.post(`${baseUrl}rooms`, roomInfo);
}

export function deleteRoom(roomId) {
    return axios.delete(`${baseUrl}rooms/${roomId}`);
}