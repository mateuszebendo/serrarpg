import axios from 'axios';

const apiDnd = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/'
});

export function getRacas() {
    const url = 'races';
    return apiDnd.get(url)
}

export function getClasses() {
    const url = 'classes';
    return apiDnd.get(url)
}

export default apiDnd;