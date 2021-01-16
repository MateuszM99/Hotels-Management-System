import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getHotel(hotelId) {
    return axios.get(`${baseUrl}hotel/${hotelId}`);
}