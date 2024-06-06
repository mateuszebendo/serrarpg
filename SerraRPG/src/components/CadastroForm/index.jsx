import React from 'react';
import  Input  from '../Input';
import {Link} from 'react-router-dom';
import SignUp from '../Buttons';
import styles from './styles.module.css';

function CadastroForm() {

    async function handleSignIn(e) {
        e.preventDefault();

        if(email !== '' && password !== '') {
            await signIn(email, password);
        }
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.formLogin} onSubmit={handleSignIn}>
                <h1 className={styles.formTitle}>Cadastrar-se</h1>
                <Input label="Novo usuário" tipo="text" />
                <Input label="Email" tipo="email" />
                <Input label="Senha" tipo="password" />
                <SignUp title="Cadastrar"/>
                <span className={styles.spanContent}>Já tem uma conta? <Link className={styles.linkContent} to="/">Entre</Link></span>
            </form>

        </div>
    );
}

export default CadastroForm;