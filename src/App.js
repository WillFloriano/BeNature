import Navbar from './components/Navbar'
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Localizacao from './pages/Localizacao'
import Orcamento from './pages/Orcamento'
import Projeto from './pages/Projeto';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />        
          <Route exact path="/projeto" element={<Projeto />} />
          <Route exact path="/empresa" element={<Empresa />} />
          <Route exact path="/orcamento" element={<Orcamento />} />
          <Route exact path="/localizacao" element={<Localizacao />} />
        </Routes>        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
