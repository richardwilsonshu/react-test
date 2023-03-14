import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { productData } from './class/ProductData';
// import { AllProducts } from './class/IProduct';
import Basket from './components/Basket';

function App() {

  const [basketItems, setBasketItems] = useState(productData.products);

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
