import './App.css';
import React from 'react';
import Header from './Header.js';
import SecondaryNav from './SecondaryNav';
import ProductPage from './ProductPage';
import ProductRows from './ProductRows';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <SecondaryNav />
      <ProductPage />
      <ProductRows />
      <Footer />
    </div>
  );
}

export default App;
