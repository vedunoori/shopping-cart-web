import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} /> {/* Use element prop */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<h2>404 Not Found!</h2>} /> {/* Catch-all route */}
        </Routes>
      </Router>
  );
}

export default App;
