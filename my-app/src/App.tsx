import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { IProduct } from './class/IProduct';
import { productData } from './class/ProductData';
// import { AllProducts } from './class/IProduct';
import Basket from './components/Basket';
import StockForm from './components/StockForm';

function App() {

  const [basketItems, setBasketItems] = useState(productData.products);

  const onRemove = (id: string) => {
    setBasketItems(basketItems.filter(item => item.id !== id));
  };

  const onSubmit = (product: IProduct) => {
    setBasketItems([...basketItems, product]);
  }

  return (
    <Container fluid>
      <StockForm onSubmit={onSubmit} />
      {/* Don't give your child your wallet. Give them £5 instead. */}
      <Basket basketItems={basketItems} onRemove={onRemove} />
    </Container>
  );
}

export default App;
