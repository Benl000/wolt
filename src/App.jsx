import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Discovery } from './pages/Discovery';
import './assets/styles/main.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Category } from './pages/Category';
import { RestaurantDetails } from './pages/RestaurantDetails.jsx';
import { Restaurant } from './pages/Restaurant.jsx';

export function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="app-body">
          <Routes>
            {/* <Redirect exact from="/" to="/discovery" /> */}
            <Route path="/" element={<Discovery />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/category/:type" element={<Category />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/restaurant/:name" element={<RestaurantDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;