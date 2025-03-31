import './Main.css'
import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Benefits from '../../components/benefits/benefits.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import VideoTutorial from '../../components/Video/Video.jsx';
import Faq from '../../components/Answer/Answer.jsx';
import Banner from '../../components/Banner/Banner.jsx';

function Main() {


  return (
    <main className='main-container'>
      <section className="main">
        <Header />
      </section>
      <section className="hero">
        <Hero />
      </section>
      <section className="benefits">
        <Benefits />
      </section>
      <section className="banner">
        <Banner />
      </section>
      <section className="video">
        <VideoTutorial />
      </section>
      <section className="faq">
        <Faq />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </main>
  )
}

export default Main
