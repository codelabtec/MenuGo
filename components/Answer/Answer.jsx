import './Answer.css';
import FaqQuestion from '../FaqQuestion/FaqQuestion.jsx'; 

const Answer = () => {

    const faqs = [
        {
          question: 'O que é o MenuGo e como ele pode ajudar meu estabelecimento?',
          answer: 'O MenuGo é uma plataforma digital moderna que transforma a experiência de atendimento do seu estabelecimento, permitindo que os clientes façam pedidos diretamente pelo celular através de um sistema intuitivo e personalizado.',
        },
        {
          question: 'Quais são os formatos de cardápio disponíveis no MenuGo?',
          answer: 'Nosso cardápio é totalmente digital e interativo, desenvolvido para oferecer a melhor experiência tanto para você quanto para seus clientes, com atualizações em tempo real e interface customizável.',
        },
        {
          question: 'Como funciona o sistema de pedidos do MenuGo?',
          answer: 'Nossa plataforma automatiza todo o processo: desde o momento em que o cliente faz o pedido até a chegada da comanda na cozinha, tudo é gerenciado digitalmente para garantir eficiência e precisão.',
        },
        {
          question: 'O MenuGo é adequado para meu tipo de estabelecimento?',
          answer: 'Nossa plataforma foi desenvolvida para atender diversos tipos de estabelecimentos, desde pequenos cafés até grandes restaurantes, com planos flexíveis que se adaptam às necessidades específicas de cada negócio.',
        },
        {
          question: 'Quais são as vantagens de usar o MenuGo para delivery e atendimento local?',
          answer: 'O MenuGo oferece uma solução integrada que permite gerenciar pedidos presenciais e delivery em uma única plataforma, otimizando seus processos e reduzindo custos operacionais.',
        },
        {
          question: 'Como o MenuGo pode me ajudar a gerenciar minha equipe?',
          answer: 'Nossa plataforma otimiza o trabalho da sua equipe, permitindo que eles foquem no que realmente importa: a qualidade do atendimento e a satisfação do cliente.',
        },
        {
          question: 'O MenuGo oferece recursos de personalização?',
          answer: 'Sim, nossa plataforma permite personalizar cores, logos, idiomas e adaptar o cardápio para diferentes necessidades dietéticas e preferências dos clientes.',
        },
      ];

    return (
        <div className="faq-container">
            <div className='faq-content'>
                <div className="faq-item">
                    <h2>Como faço para criar um cardápio digital?</h2>
                    <p>Para criar um cardápio digital, basta acessar o site do MenuGo, fazer o seu cadastro e seguir o passo a passo para criar o seu cardápio digital personalizado.</p>
                </div>

                <div className='faq-unswer'>
                    <FaqQuestion faqs={faqs} />
                </div>
            </div>
        </div>
    );

};

export default Answer;