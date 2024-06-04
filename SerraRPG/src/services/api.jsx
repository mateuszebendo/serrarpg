import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.dnd5eapi.co/'
});

export default api;