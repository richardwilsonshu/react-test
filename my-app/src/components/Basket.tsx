import { IProduct } from "../class/IProduct";
import ProductList from "./ProductList";

export type BasketProps = {
    basketItems: IProduct[];
};

export const Basket = ({basketItems}: BasketProps) => {

    //<h4>Nothing to see</h4>

    return (
        <div style={{padding: "20px"}}>
            <h1>Basket</h1>
            <ProductList products={basketItems} />
        </div>
    );
}

export default Basket;