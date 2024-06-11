import { db } from '../../services/Firebase/firebaseConnection';
import { collection, getDocs, doc, addDoc, updateDoc } from 'firebase/firestore';

export default function storePersonagens(personagens) {
    localStorage.setItem('@fichas', JSON.stringify(personagens))
}

export async function registraFichas(fichas) {
    try {
        await Promise.all(fichas.map(async (ficha) => {
            await addDoc(collection(db, "fichas"), ficha);
            alert("FICHAS REGISTRADAS COM SUCESSO");
        }));
    } catch (error) {
        console.error("Erro ao registrar fichas:", error);
    }
}
export async function atualizaFicha(novosDados) {
    const fichasRef = collection(db, "fichas");

    try {
        const querySnapshot = await getDocs(fichasRef);

        const promises = querySnapshot.docs.map(async (doc) => {
            const fichaRef = doc(db, "fichas", doc.id);
            await setDoc(fichaRef, novosDados);
            console.log("FICHA ATUALIZADA COM SUCESSO", doc.id, novosDados);
        });

        await Promise.all(promises);

        alert("Todas as fichas foram atualizadas com sucesso!");
    } catch (error) {
        console.error("Erro ao atualizar fichas:", error);
    }
}
export async function loadFichas(storedUser) {
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

        return listaFichas;
    } catch (error) {
        console.log("Erro ao carregar fichas:", error);
    }
}