import { IProduct } from "../class/IProduct";
import ProductDisplay from "./ProductDisplay";

export type ProductListProps = {
    products: IProduct[];
    onRemove: (id: string) => void;
};

export const ProductList = ({products, onRemove}: ProductListProps) => {
    return (
        <>
            {products.map(product => {
                return (
                    <ProductDisplay 
                        key={product.id} 
                        product={product} 
                        onRemove={() => onRemove(product.id)} 
                    />
                );
            })}
        </>
    );
}

export default ProductList;