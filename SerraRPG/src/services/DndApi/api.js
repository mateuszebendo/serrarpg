import axios from 'axios';

const apiDnd = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/'
});

const apiDndItem = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/equipment/'
});

const apiAllById= axios.create({
    baseURL: 'https://www.dnd5eapi.co/'
});

export const getArmor = () => {

    const url = 'equipment-categories/armor';

    try{
        return apiDnd.get(url);
    }catch{
        console.log('deu erro');
    }
}

export const getWeapons = () => {

    const url = 'equipment-categories/weapon';

    try{
        return apiDnd.get(url);
    }catch{
        console.log('deu erro');
    }
}

export const getRules = () => {

    const url = 'rule-sections';

    try{
        return apiDnd.get(url);
    }catch{
        console.log('deu erro');
    }
}

export const getRulesById = (id) => {
    
    const url = 'rule-sections/'+{id};
    console.log(url);
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

export function getAll(url) {
    try {
        return apiDnd.get(url)
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}

export function getSpells() {
    const url = "spells"

    try {
        return apiDnd.get(url);
    } catch (error) {
        console.error('Erro ao obter dados de API:', error);
    }
}

export function getClasses() {
    const url = "classes"

    try {
        return apiDnd.get(url);
    } catch (error) {
        console.error('Erro ao obter dados de API:', error);
    }
}

export function getAllById(url) {
    try {
        return apiAllById.get(url);
    } catch (error) {
        console.error('Erro ao obter dados de API:', error);
    }
}

export default apiDnd;