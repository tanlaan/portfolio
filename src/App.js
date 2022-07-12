import './assets/sass/main.scss';
import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Skills from './components/skills/skills';

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
