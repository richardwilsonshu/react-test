import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
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
      category: "drink"
  },
  {
      id: "3",
      name: "Yorkie Bar x3",
      price: 1.5,
      keywords: "chocolate",
      category: "food"
  },
  {
      id: "4",
      name: "Cookie (4 pack)",
      price: 1.25,
      keywords: "chocolate",
      category: "food"
  }
  ] as IProduct[];

  const [basketItems, setBasketItems] = useState([allProducts[1], allProducts[2], allProducts[3]]);

  const onRemove = (id: string) => {
    setBasketItems(basketItems.filter(item => item.id !== id));
  };

  return (
    <Container fluid>
      <Basket basketItems={basketItems} onRemove={onRemove} />
    </Container>
  );
}

export default App;
