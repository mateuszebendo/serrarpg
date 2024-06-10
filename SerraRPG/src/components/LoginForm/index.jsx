import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import  Input  from '../Input';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import SignIn from '../Buttons';
import styles from './styles.module.css';

function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[check, setCheck] = useState(false);
    const { logar, loadingAuth} = useContext(AuthContext);

    useEffect(() => {
        const emailSalvo = localStorage.getItem('emailSalvo');
        if(emailSalvo) {
            setEmail(emailSalvo);
            setCheck(true);
        }
    }, []);

    async function handleLogar(e) {
        e.preventDefault();

        if(email !== '' && password !== '') {
            await logar(email, password);
        }
    }

    function handleCheck() {
        setCheck(!check);
        if(!check) {
            localStorage.setItem('emailSalvo', email);
        } else {
            localStorage.removeItem('emailSalvo');
            setEmail('');
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
                    <input
                        type="checkbox"
                        name="check"
                        value={check}
                        checked={check}
                        onChange={handleCheck}
                    />
                    <label className={styles.checktext}>Lembrar usuário</label>
                    <Link className= {styles.passwordForgot} to="/password-forgot">Esqueceu sua senha?</Link>
                </div>
                <SignIn title={loadingAuth ? <AiOutlineLoading3Quarters className={styles.loadingIcon}/> : 'Entrar'} type="Submit" />
                <span className={styles.spanContent}>Não tem uma conta? <Link className={styles.linkContent} to="/cadastro">Inscteva-se</Link></span>
            </form>

        </div>
    );
}

export default Login;