import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFound';
import CartPage from './pages/Cart';
import ProductPage from './pages/ProductPage';
import ContactSection from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import CheckoutPage from './pages/Checkout';

function App() {
  return (
    <ProductProvider>
      <Router>
        {/* The Header is outside Routes to display on all pages */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactSection />} />


          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
