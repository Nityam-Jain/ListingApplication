import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';

import Home from './pages/Home.jsx';
import SignUpPage from './pages/Signup.jsx'
import LogInPage from './pages/Login.jsx';
import Services from './pages/Services.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// const Placeholder = ({ title }) => <h2>{title} page coming soon...</h2>;


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 className="text-center mt-20">Page not found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}