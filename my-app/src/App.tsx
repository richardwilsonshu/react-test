import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { AllProducts } from './class/IProduct';
import Basket from './pages/Basket';

function App() {

  const [basketItems, setBasketItems] = useState(AllProducts);

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
