import axios from 'axios'

const baseUrl = 'http://localhost:8080/';

export function getUrlsByRoomId(roomId) {
    return axios.get(`${baseUrl}photo/${roomId}`);
}
