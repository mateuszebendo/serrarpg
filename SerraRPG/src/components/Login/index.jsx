import React from 'react';
import  Input  from '../Input';
import SignIn from '../Buttons';
import styles from './styles.module.css';

function Login() {

    async function handleSignIn(e) {
        e.preventDefault();

        if(email !== '' && password !== '') {
            await signIn(email, password);
        }
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.formLogin} onSubmit={handleSignIn}>
                <h1 className={styles.formTitle}>Login</h1>
                <Input label="Email" tipo="email" />
                <Input label="Senha" tipo="password" />
                <div className={styles.bottomInputContent}>
                    <input type="checkbox" name="check" id="check" />
                    <label className={styles.checktext} for="check">Lembrar usuário</label>
                    <a className= {styles.passwordForgot} href="">Esqueceu sua senha?</a>
                </div>
                <SignIn title="Entrar"/>
            </form>

        </div>
    );
}

export default Login;