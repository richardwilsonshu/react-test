import { Row } from "react-bootstrap";
import { IProduct } from "../class/IProduct";
import ProductList from "./ProductList";

export type BasketProps = {
    basketItems: IProduct[];
    onRemove: (id: string) => void;
};

export const Basket = ({basketItems, onRemove}: BasketProps) => {

    return (
        <Row style={{padding: "20px"}}>
            <h1 className="text-center">Basket 🧺</h1>
            { 
                basketItems.length === 0 
                    ? <h4>Your basket is empty!</h4>
                    : <ProductList products={basketItems} onRemove={onRemove} />
            }
        </Row>
    );
}

export default Basket;