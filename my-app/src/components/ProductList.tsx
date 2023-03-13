import { IProduct } from "../class/IProduct";
import ProductDisplay from "./ProductDisplay";

export type ProductListProps = {
    products: IProduct[]
};

export const ProductList = ({products}: ProductListProps) => {
    return (
        <>
            {products.map(product => {
                return (<ProductDisplay product={product} />);
            })}
        </>
    );
}

export default ProductList;