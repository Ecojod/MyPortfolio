import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import Portfolio from './component/portfolio/Portfolio'
import Testimonails from './component/testimonials/Testimonials'
import Footer from './component/footer/Footer'
import Services from './component/services/Services'
import Experience from './component/experience/Experience';
function App() {
  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonails/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
