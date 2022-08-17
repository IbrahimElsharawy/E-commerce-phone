import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDetail/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
