import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Amenities from './components/Amenities';
import Events from './components/Events';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='backgroundFixedImg'></div>
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Events />
      <Applications /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
