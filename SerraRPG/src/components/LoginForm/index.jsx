import React, { useState, useContext } from 'react';
import  Input  from '../Input';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import SignIn from '../Buttons';
import styles from './styles.module.css';

function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const { logar, loadingAuth} = useContext(AuthContext);

    async function handleLogar(e) {
        e.preventDefault();

        if(email !== '' && password !== '') {
            await logar(email, password);
        }
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.formLogin} onSubmit={handleLogar}>
                <h1 className={styles.formTitle}>Login</h1>
                <Input
                    label="Email"
                    type="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Senha"
                    type="password"
                    autoComplete="false"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.bottomInputContent}>
                    <input type="checkbox" name="check" id="check" />
                    <label className={styles.checktext}>Lembrar usuário</label>
                    <a className= {styles.passwordForgot} href="">Esqueceu sua senha?</a>
                </div>
                <SignIn title="Entrar" type="Submit">
                    {loadingAuth ? "Carregando..." : "Acessar"}
                </SignIn>
                <span className={styles.spanContent}>Não tem uma conta? <Link className={styles.linkContent} to="/cadastro">Inscteva-se</Link></span>
            </form>

        </div>
    );
}

export default Login;