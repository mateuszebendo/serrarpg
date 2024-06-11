import React, { useState, useContext } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import  Input  from '../Input';
import NewPassword from '../Buttons';
import styles from './styles.module.css';
import { AuthContext } from '../../contexts/auth';

function PasswordForgotForm() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const {alteraSenha, loadingAuth} =  useContext(AuthContext);

    async function handleNewPassword(e) {
/*         e.preventDefault();
        if(password !== '') {
            await alteraSenha(password);
        } else {
            alert("Preencha todos os campos!");
        } */
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.formLogin} onSubmit={handleNewPassword}>
                <h1 className={styles.formTitle}>Nova Senha</h1>
                <Input
                    label="Email"
                    type="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Nova Senha"
                    type="password"
                    autoComplete="false"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <NewPassword title={loadingAuth ? <AiOutlineLoading3Quarters className={styles.loadingIcon}/> : 'Alterar Senha'} type="Submit" />
            </form>

        </div>
    );
}

export default PasswordForgotForm;