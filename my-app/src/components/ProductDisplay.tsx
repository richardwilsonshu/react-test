import { IProduct } from "../class/IProduct";

export type ProductDisplayProps = {
    product: IProduct
};

export const ProductDisplay = ({product}: ProductDisplayProps) => {
    return (
        <div style={{"padding": "10px", "backgroundColor": "lightyellow"}}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>£{product.price}</p>
        </div>
    );
}

export default ProductDisplay;