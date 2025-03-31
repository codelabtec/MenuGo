import './SignUp.css';

const SignUp = () => {

    return (
        <div className="sign-up-container">
            <div className="sign-up-content">
                <h1>Crie sua conta</h1>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirmar Senha" />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )

};

export default SignUp;