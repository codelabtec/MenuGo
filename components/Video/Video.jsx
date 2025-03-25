import './Video.css';

const VideoTutorial = () => {

    return  (
        <section className='video-container'>
            <div className='video-content'>
                <div className='video-text'>
                    <span>Demonstração Completa</span>
                    <h2>Veja o MenuGo em ação!</h2>
                    <p>Assista à demonstração detalhada, desde a criação do seu cardápio digital até o recebimento automático dos pedidos na cozinha, finalizando com a solicitação da conta pelo cliente.</p>
                </div>
                
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                        src="https://www.tella.tv/video/cm86gnob4000e0ajmcjdrhjr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0"
                        allowFullScreen={true}
                        allowTransparency="true"
                    ></iframe>
                    </div>
            </div>
        </section>
    );

}

export default VideoTutorial;