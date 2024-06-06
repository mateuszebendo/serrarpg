import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.dnd5eapi.co/'
});

export const getRaca = () => {
    const url = 'races/';

    try {
        return apiDnd.get(url)
    } catch {
        console.log('deu erro');
    }
}

export default api;