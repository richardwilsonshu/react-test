import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { IProduct } from "../class/IProduct";
import { productData } from "../class/ProductData";
import ProductList from "../components/ProductList";
import StockForm from "../components/StockForm";

export const Basket = () => {

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
            <Row style={{padding: "20px"}}>
                <h1 className="text-center">Basket 🧺</h1>
                { 
                    basketItems.length === 0 
                        ? <h4>Your basket is empty!</h4>
                        : <ProductList products={basketItems} onRemove={onRemove} />
                }
            </Row>
        </Container>
    );
}

export default Basket;