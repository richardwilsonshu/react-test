import React from 'react';
import './App.css';
import { IProduct } from './class/IProduct';
import Basket from './components/Basket';

function App() {

  const allProducts = [
  {
      id: "1",
      name: "Trainers",
      price: 29.99,
      keywords: "shoes",
      category: "clothing"
  },
  {
      id: "2",
      name: "Lemon & Lime Sparkling Water",
      price: 0.8,
      keywords: "drink fizz",
      category: "drinks"
  }
  ] as IProduct[];

  const basketItems = [allProducts[0]];

  return (
    <div className="App">
      <Basket basketItems={basketItems} />
    </div>
  );
}

export default App;
