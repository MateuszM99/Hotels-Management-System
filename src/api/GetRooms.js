import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getRoomsByHotelId(hotelId) {
    return axios.get(`${baseUrl}rooms/${hotelId}`);
}