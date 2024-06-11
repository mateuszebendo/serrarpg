import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Input from '../Input';
import NewPassword from '../Buttons';
import styles from './styles.module.css';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function PasswordForgotForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loadingAuth, setLoadingAuth] = useState(false);
    const navigate = useNavigate();

    const handlePasswordReset = async (event) => {
        event.preventDefault();
        setLoadingAuth(true);
        const auth = getAuth();

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess("Foi enviado um email de redefinição, para seu email. Por favor, verifique sua caixa de entrada.");
            setError("");
            setTimeout(() => {
                navigate('/');
            }, 4000);
        } catch (error) {
            setError(error.message);
            setSuccess("");
        } finally {
            setLoadingAuth(false);
        }
    };

    return(
        <div className={styles.formContainer}>
            <form className={styles.formLogin} onSubmit={handlePasswordReset}>
                <h1 className={styles.formTitle}>Nova Senha</h1>
                <Input
                    label="Email"
                    type="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email"
                />
                <NewPassword title={loadingAuth ? <AiOutlineLoading3Quarters className={styles.loadingIcon}/> : 'Redefinir senha'} type="submit" />
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}
            </form>
        </div>
    );
}

export default PasswordForgotForm;
