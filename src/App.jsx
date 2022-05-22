import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login'
import './assets/styles/main.scss'

export function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Link to='/login'>Login</Link>
      </div>
    </Router>
  );
}

export default App;