import './Banner.css';
import Icon from '../../src/assets/icons4.svg';
import Icon2 from '../../src/assets/icon22.svg';
import Icon3 from '../../src/assets/icon33.svg';
import checkIcon from '../../src/assets/check.svg';
import Photo1 from '../../src/assets/photo1.webp';
import Photo2 from '../../src/assets/Photo2.webp';
import Photo3 from '../../src/assets/Photo3.webp';

const Banner = () => {

    return (
        <section className="banner-container">
            <div className="banner-content">
                <div className="banner-text">
                    <span>Como funciona?</span>
                    <h1>Veja como é simples usar o MenuuGo!</h1>
                </div>
                <div className='banner-image-container'>
                    <div className="text-image">
                        <div className='banner-text-image'>
                            <div className='icons'>
                                <img src={Icon} alt="ícone de um cardápio digital" />
                                <h2>Crie seu Cardápio Completo</h2>
                                <p>Adicione pratos e bebidas com praticidade, criando rapidamente seu cardápio digital personalizado. Ao concluir o cadastro, você poderá gerar imediatamente o QR Code e o link de acesso ao cardápio.</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>Gere QR Codes ilimitados;</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>Cadastre facilmente pratos e bebidas;</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>Registre suas mesas no sistema e gere QR Codes exclusivos para cada uma ou um exclusivo caso seu estabelecimento não tenha assentos.</p>
                            </div>
                        </div>
                    </div>
                    <div className='banner-image'>
                        <img src={Photo1} alt="Imagem do mockup com MenuuGo" />
                    </div>
                </div>
                <div className='banner-image-container-2'>
                    <div className='banner-image-2'>
                        <img src={Photo2} alt="Imagem do mockup com MenuuGo" />
                    </div>
                    <div className="text-image-2">
                        <div className='banner-text-image'>
                            <div className='icons'>
                                <img src={Icon2} alt="ícone da mesa dos restaurantes" />
                                <h2>Disponibilize os QR Codes nas Mesas</h2>
                                <p>Imprima e coloque facilmente os QR Codes gerados sobre as respectivas mesas, e pronto!</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>O cliente escaneia o QR Code e é automaticamente direcionado ao cardápio digital do seu restaurante;</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>Navega pelos itens que você cadastrou, selecionando facilmente o que deseja consumir;</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>Você recebe o pedido instantaneamente na cozinha, visualiza-o diretamente em um monitor e inicia o preparo com eficiência e rapidez.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banner-image-container'>
                    <div className="text-image">
                        <div className='banner-text-image'>
                            <div className='icons'>
                                <img src={Icon3} alt="ícone de uma conta de restaurante" />
                                <h2>Fechamento da Conta Simplificado</h2>
                                <p>Após realizar o pedido, o cliente recebe automaticamente uma confirmação de que o pedido foi feito com sucesso e pode solicitar a conta diretamente pelo cardápio digital.</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>Agilize o fechamento da conta, reduzindo o tempo de espera;</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>O garçom chega diretamente com a máquina de pagamento;</p>
                            </div>
                            <div className='check'>
                                <img src={checkIcon} alt="ícone de check" />
                                <p>O cliente sai satisfeito com a praticidade e rapidez do atendimento.</p>
                            </div>
                        </div>
                    </div>
                    <div className='banner-image'>
                        <img src={Photo3} alt="Imagem do mockup com MenuuGo" />
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Banner;

