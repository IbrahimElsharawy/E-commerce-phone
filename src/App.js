import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route to="/" component={Home} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        <Route to="/products" component={Product} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
