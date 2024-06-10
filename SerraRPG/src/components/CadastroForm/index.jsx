import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AuthContext } from '../../contexts/auth';
import  Input  from '../Input';
import { Link } from 'react-router-dom';
import SignUp from '../Buttons';
import styles from './styles.module.css';
import Popup from '../Popup';

function CadastroForm() {
    const[newUser, setNewUser] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[popupError, setPopupError] = useState(false);
    const[clicked, setClicked] = useState(false);

    const {cadastrar, loadingAuth} = useContext(AuthContext);

    async function handleCadastrar(e) {
        e.preventDefault();

        if(newUser !== '' && email !== '' && password !== '') {
            await cadastrar(newUser, email, password);
        } else {
            setPopupError(true)
        }
    }

    useEffect(() => {
        if(popupError) {
            setTimeout(() => {
                setPopupError(false)
            }, 4000);
        }
    }, [popupError])

    return(
        <div className={styles.formContainer}>
            <form className={styles.formLogin} onSubmit={handleCadastrar}>
                <h1 className={styles.formTitle}>Cadastrar</h1>
                <Input
                    label="Novo usuário"
                    type="text"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                />
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    autoComplete="username"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Senha"
                    type="password"
                    value={password}
                    autoComplete="auto-complete"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SignUp title={loadingAuth ? <AiOutlineLoading3Quarters className={styles.loadingIcon}/> : 'Cadastrar'} type="Submit"/>
                <span className={styles.spanContent}>Já tem uma conta? <Link className={styles.linkContent} to="/">Entre</Link></span>
            </form>
            {
                popupError? <Popup message={"Calma lá mestre!  Todos os campos devem ser preenchidos para criar a sua conta de aventureiro."}></Popup> : null
            }
        </div>
    );
}

export default CadastroForm;