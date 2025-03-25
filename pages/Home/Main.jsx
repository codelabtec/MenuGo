import './Main.css'
import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Benefits from '../../components/benefits/benefits.jsx';

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
    </main>
  )
}

export default Main
