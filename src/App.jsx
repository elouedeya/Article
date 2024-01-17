import "./App.css";
import ProductProvider from "./Context/ProductProvider";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShowProduct from "./components/ShowProduct";
import ArticlesList from "./articles/ArticlesList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ProductProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ShowProduct />} />
            <Route path="/about/" element={<About />} />
            <Route path="/blog/" element={<ArticlesList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ProductProvider>
      </Router>
    </>
  );
}

export default App;
