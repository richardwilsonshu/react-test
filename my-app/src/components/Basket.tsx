import { IProduct } from "../class/IProduct";
import ProductList from "./ProductList";

export type BasketProps = {
    basketItems: IProduct[];
};

export const Basket = ({basketItems}: BasketProps) => {

    return (
        <div style={{padding: "20px"}}>
            <h1>Basket 🧺</h1>
            { 
                basketItems.length === 0 
                    ? <h4>Your basket is empty!</h4>
                    : <ProductList products={basketItems} />
            }
        </div>
    );
}

export default Basket;