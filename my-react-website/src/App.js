import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer'
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/Menu' element={<Menu />}/>
          <Route exact path='/About' element={<About />}/>
          <Route exact path='/Contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
