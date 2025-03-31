import './Header.css';
import Logo from '../../src/assets/logo.svg'
import MenuMobileIcon from '../../src/assets/menu-mobile-icon.svg'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header-container">
            <div className='header-content'>
                <img src={Logo} alt="Logo do MenuuGo que está no header da home" />
                <div className='header-buttons'>
                    <a href='#' id='contato'>Contato</a>
                    <Link id='login' to='/login'>
                        Login
                    </Link>
                    <Link id='cadastro' to='/cadastre-se'>
                         Cadastrar
                    </Link>
                </div>
                <div className='menu-mobile'>
                    <img src={MenuMobileIcon} alt="Ícone de menu mobile" />
                </div>
            </div>
        </header>
    )

};

export default Header;