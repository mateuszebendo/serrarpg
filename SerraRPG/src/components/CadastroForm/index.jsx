import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AuthContext } from '../../contexts/auth';
import  Input  from '../Input';
import { Link } from 'react-router-dom';
import SignUp from '../Buttons';
import styles from './styles.module.css';

function CadastroForm() {
    const[newUser, setNewUser] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const {cadastrar, loadingAuth} = useContext(AuthContext);

    async function handleCadastrar(e) {
        e.preventDefault();

        if(newUser !== '' && email !== '' && password !== '') {
            await cadastrar(newUser, email, password);
        } else {
            alert("Calma lá mestre!  Todos os campos devem ser preenchidos para criar a sua conta de aventureiro.")
        }
    }

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
                <SignUp title={loadingAuth ? <AiOutlineLoading3Quarters className={styles.loadingIcon}/> : 'Cadastrar'} type="Submit" />
                <span className={styles.spanContent}>Já tem uma conta? <Link className={styles.linkContent} to="/">Entre</Link></span>
            </form>

        </div>
    );
}

export default CadastroForm;