import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Discovery } from './pages/Discovery';
import './assets/styles/main.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Category } from './pages/Category';

export function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Discovery />} />
          <Route path="/category/:type" element={<Category />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;