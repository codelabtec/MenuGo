import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;