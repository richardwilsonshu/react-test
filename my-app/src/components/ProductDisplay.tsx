import { Button, Card, Col } from "react-bootstrap";
import { IProduct } from "../class/IProduct";

export type ProductDisplayProps = {
    product: IProduct;
    onRemove: () => void;
};

export const ProductDisplay = ({product, onRemove}: ProductDisplayProps) => {
    return (
        <Col sm={3}>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>£{product.price}</Card.Text>
                    <p className="m-0 p-0 small text-muted">Category: {product.category}</p>
                    <p className="m-0 p-0 small text-muted">Keywords: {product.keywords}</p>
                    <Button className="mt-3" variant="danger" onClick={onRemove}>Remove</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductDisplay;