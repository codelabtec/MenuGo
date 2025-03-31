import './Hero.css';
import IphoneMockup from '../../src/assets/mockup-iphone.webp';
import CardapioIcon from '../../src/assets/cardapio-icon.svg';
import QrCodeIcon from '../../src/assets/qrcode-icon.svg';
import WebMockup from '../../src/assets/web.webp';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <section className="hero-container">
            <div className='hero-content'>
                <div className='hero-text'>
                    <span>Crie seu cardápio grátis</span>
                    <h1>Crie seu Cardápio Online em Minutos e Aumente suas Vendas!</h1>
                    <p>Crie, personalize e publique cardápios digitais incríveis com facilidade e rapidez. Atraia mais clientes, otimize suas vendas e ofereça uma experiência moderna com o nosso criador de cardápios online.</p>
                    <Link to='/login'>
                        Criar seu cardápio
                    </Link>

                    <div className='hero-cards'>
                        <div className='card'>
                            <img src={CardapioIcon} alt='Ícone de um cardápio'></img>
                            <div>
                                <h2>Crie seu Cardápio</h2>
                                <p>Gratuitos e Personalizaveis.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={QrCodeIcon} alt="Ícone do QR Code" />
                            <div>
                                <h2>Crie seu Cardápio</h2>
                                <p>Gere QR Code gratuitamente.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-image'>
                    <div className='image1'>
                        <img src={IphoneMockup} alt="Mockup de um iphone mostrar o comportamento do cardápio no celular do cliente." />
                    </div>
                    <div className='image2'>
                        <img src={WebMockup} alt="Mockup web mostrando o dashboard para a criação do cardápio na área logada." />
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Hero;