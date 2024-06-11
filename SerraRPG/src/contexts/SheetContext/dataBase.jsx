import React, { useContext } from 'react';
import { AuthContext } from '../auth';
import { db } from '../../services/Firebase/firebaseConnection';
import { collection, getDocs, doc, addDoc} from 'firebase/firestore';

export default function storePersonagens(personagens) {
    localStorage.setItem('@fichas', JSON.stringify(personagens))
}

export async function registraFichas(fichas) {
    try {
        await Promise.all(fichas.map(async (ficha) => {
            await addDoc(collection(db, "fichas"), ficha);
            console.log("FICHA REGISTRADA COM SUCESSO", ficha);
        }));
    } catch (error) {
        console.error("Erro ao registrar fichas:", error);
    }
}

export async function loadFichas() {
    const { getStoredUser } = useContext(AuthContext);
    const storedUser = getStoredUser();
    const docRef = collection(db, "fichas");

    try {
        const querySnapshot = await getDocs(docRef);
        let listaFichas = [];

        querySnapshot.forEach((doc) => {
            const ficha = doc.data();
            if (ficha.userId === storedUser.uid) {
                listaFichas.push(ficha);
            }
        });

        storePersonagens(listaFichas);
    } catch (error) {
        console.log("Erro ao carregar fichas:", error);
    }
}