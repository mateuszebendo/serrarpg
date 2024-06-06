import axios from 'axios';

const apiDnd = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/'
});

const apiDndItem = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/equipment/'
});

<<<<<<< Updated upstream
export function getItem(url){
    try {
        return apiDndItem.get(url)
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}

=======
export const getArmor = () => {

    const url = 'equipment-categories/armor';

    try{
        return apiDnd.get(url);
    }catch{
        console.log('deu erro');
    }
}

export function getItem(url){
    try {
        return apiDndItem.get(url)
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}

>>>>>>> Stashed changes
export function getAll(url) {
    try {
        return apiDnd.get(url)
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}

export default apiDnd;