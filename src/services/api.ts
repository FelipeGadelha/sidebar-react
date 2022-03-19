import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/vet-hero';

const api = axios.create({
    baseURL: BASE_URL,
})

export default api;