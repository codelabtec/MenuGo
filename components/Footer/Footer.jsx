import './Footer.css';
import LogoLight from '../../src/assets/menuugo-logo-light.svg';
import FacebookIcon from '../../src/assets/facebook-social-media-icon.svg';
import InstagramIcon from '../../src/assets/instagram-social-media-icon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {

    const getCurrentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
           <div className='footer-content'>
                <img src={LogoLight} alt="Logo da MenuuGo branca" />
                    <div className='footer-links'>
                        <div className='footer-menu'>
                            <a href='#'>Contato</a>
                            <Link to='/login'>Entrar</Link>
                            <Link to='/cadastre-se'>Cadastre-se</Link>
                        </div>
                        <div className='social-icons'>
                            <a href='https://www.facebook.com/profile.php?id=61574607146832' target='_blank' rel='noopener noreferrer'>
                                <img src={FacebookIcon} alt="Ícone do Facebook" />
                            </a>
                            <a href='https://www.instagram.com/menuugo.oficial/' target='_blank' rel='noopener noreferrer'>
                                <img src={InstagramIcon} alt="Ícone do Instagram" />
                            </a>
                        </div>
                    </div>
                <div className='footer-text'>
                    <p>MenuuGo © {getCurrentYear}. Todos os direitos reservados.</p>
                    <p>Desenvolvido por <a href="https://www.codelabtec.com" target='_blank' rel='noopener noreferrer'>Codelab Tecnologia</a></p>
                </div>
           </div>
        </footer>
    )

};

export default Footer;