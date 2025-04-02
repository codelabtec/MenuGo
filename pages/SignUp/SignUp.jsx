import './SignUp.css';
import Background from '../../src/assets/points-background-2.svg';
import MenuuGoLogo from '../../src/assets/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@mui/material';

const SignUp = () => {

    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [numero, setNumero] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setMessage("");
        setLoading(true);

        const userData = {
            nome,
            email,
            numero,
            senha,
        };

        try {
            const response = await fetch("http://localhost:3000/api/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            
            if (response.ok) {

                enqueueSnackbar( data.message || 'Login realizado com sucesso!', { variant: 'success' });
                // setMessage(data.message || "Usuário cadastrado com sucesso");

                //limpa os campos
                setNome("");
                setEmail("");
                setSenha("");
                setNumero("");
                // setConfirmSenha("");
               
            }else {

                if (data.code === 'EMAIL_EXISTS' || data.message.includes('email')) {
                    enqueueSnackbar('Este email já está cadastrado', { variant: 'error' });
                } else {
                    enqueueSnackbar(data.message || 'Erro ao cadastrar usuário', { variant: 'error' });
                }

            }

            
        }
        catch (error) {
            // console.error("Erro ao cadastrar usuário:", error);
            // setMessage("Erro ao cadastrar usuário");
            enqueueSnackbar( error || "Erro ao cadastrar usuário", { variant: 'error' });
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-content">
                <Link className='logo' to={"/"}>
                    <img src={MenuuGoLogo} alt="Logo da MenuuGo" />
                </Link>
                <h1>Cadastre-se na MenuuGo</h1>
                <p id='subtitle'>Seja bem-vindo! Por favor preencha os campos abaixo para realizar seu cadastro.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="nome">Nome do restaurante<span>*</span></label>
                        <input autoComplete="off" autoCorrect="off" autoCapitalize="off" id='nome' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome do restaurante" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">E-mail<span>*</span></label>
                        <input autoComplete="off" autoCorrect="off" autoCapitalize="off" id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="numero">Telefone<span>*</span></label>
                        <input autoComplete="off" autoCorrect="off" autoCapitalize="off" id='numero' type="tel" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="(00) 00000-0000" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha<span>*</span></label>
                        <input autoComplete="off" autoCorrect="off" autoCapitalize="off" id='password' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Sua senha" required/>
                    </div>
                    {/* <div className="input-group">
                        <label htmlFor="password">Confirmar Senha<span>*</span></label>
                        <input  id='password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar senha"/>
                    </div> */}
                    <div className='terms'>
                        <div>
                            {/* <input type="checkbox" /> */}
                            <p><span>*</span> Campos obrigatórios</p>
                        </div>
                        <Link className='senha'>
                            Esqueci minha senha
                        </Link>
                    </div>
                    <button  disabled={loading} type="submit" className="submit-button">

                    {loading ? (
                        <>
                        <CircularProgress size={20} style={{color: 'white', marginRight: '8px'}} />
                        Cadastrando
                        </>
                    ) : (
                        'Cadastrar'
                    )}

                    </button>
                    <div className='login-link'>
                        <p>Já tem uma conta?</p>
                        <Link className='login' to='/login'>Entrar</Link>
                    </div>
                </form>
                {/* {message && <p className="message">{message}</p>} */}
            </div>
        </div>
    )

};

export default SignUp;