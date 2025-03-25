import './benefits.css';
import FastIcon from '../../src/assets/icon1.svg';
import DesignIcon from '../../src/assets/icon2.svg';
import UpdateIcon from '../../src/assets/icon3.svg';

const Benefits = () => {

    return (
        <section className="benefits-container">
            <div className='benefits-content'>
                <div className='benefits-card'>
                    <img src={FastIcon} alt='Ícone de um cardápio'></img>
                    <div>
                        <h2>Criação rápida e simplificada</h2>
                        <p>Crie seu cardápio digital em poucos minutos, personalize-o conforme sua preferência e gere instantaneamente um QR Code junto com um link exclusivo para compartilhamento.</p>
                    </div>
                </div>
                <div className='benefits-card'>
                    <img src={DesignIcon} alt='Ícone de um cardápio'></img>
                    <div>
                        <h2>Criação rápida e simplificada</h2>
                        <p>Crie seu cardápio digital em poucos minutos, personalize-o conforme sua preferência e gere instantaneamente um QR Code junto com um link exclusivo para compartilhamento.</p>
                    </div>
                </div>
                <div className='benefits-card'>
                    <img src={UpdateIcon} alt='Ícone de um cardápio'></img>
                    <div>
                        <h2>Criação rápida e simplificada</h2>
                        <p>Crie seu cardápio digital em poucos minutos, personalize-o conforme sua preferência e gere instantaneamente um QR Code junto com um link exclusivo para compartilhamento.</p>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Benefits;