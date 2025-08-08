import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <>
      <header className="navbar">
        <nav className="container nav">
          <NavLink to="/" className="brand">MySite</NavLink>
          <div className="links">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
    </>
  );
}