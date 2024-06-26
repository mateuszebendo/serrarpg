import React, { useState, createContext, useEffect } from 'react';
import { auth, db } from '../services/Firebase/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('@ticketsPRO');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem('@ticketsPRO')

            if(storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false);
            }

            setLoading(false);

        }

        loadUser();

    }, []);

    async function cadastrar(newUser, email, password) {
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async(value) => {
            let uid = value.user.uid

            await setDoc(doc(db, "users", uid), {
                nome: newUser,
                email: value.user.email,
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: newUser,
                    email: value.user.email,
                };

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                alert("Mestre cadastrado com sucesso!")
                navigate('/')

            })

        })
        .catch((error) => {
            console.log(error);
            setLoadingAuth(false);
        })
    }

    function storageUser(data) {
        localStorage.setItem('@ticketsPRO', JSON.stringify(data))
    }

    async function logar(email, password) {
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
        .then(async(value) => {
            let uid = value.user.uid;

            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef)

            let data = {
                uid: uid,
                    nome: docSnap.data().nome,
                    email: value.user.email
            }

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            alert("Bem-vindo(a) ao Serra RPG!");
        })
        .catch((error) => {
            console.log(error);
            setLoadingAuth(false);
            alert("Ops, email ou senha não cadastrados!");
        })
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@ticketsPRO');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            logar,
            cadastrar,
            logout,
            loadingAuth,
            loading,
            storageUser,
            setUser,
            getStoredUser: () => JSON.parse(localStorage.getItem('@ticketsPRO'))
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;