import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Discovery } from './pages/Discovery';
import './assets/styles/main.scss';
import { Header } from './components/Header';
import { Category } from './pages/Category';

export function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Discovery />} />
          <Route path="/pizza" element={<Category params={'pizza'} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;