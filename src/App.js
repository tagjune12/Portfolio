import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

const App = () => {
  return (
    <>
      <header>
        <a id="title" href="">TaekJun's Portfolio</a>
        <Navbar className="navbar" id="global-navbar" items={['Home', 'About', 'Skills', 'Projects', 'Contact']} />
      </header>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
