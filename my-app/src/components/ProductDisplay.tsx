import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { IProduct } from "../class/IProduct";

export type ProductDisplayProps = {
    product: IProduct;
    onRemove: () => void;
};

export const ProductDisplay = ({product, onRemove}: ProductDisplayProps) => {

    const [ hover, setHover ] = useState(false);

    return (
        <Col sm={3}>
            <Card onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div style={{"display": (hover ? "block" : "none")}}>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>£{product.price}</Card.Text>
                        <p className="m-0 p-0 small text-muted">Category: {product.category}</p>
                        <p className="m-0 p-0 small text-muted">Keywords: {product.keywords}</p>
                        <Button className="mt-3" variant="danger" onClick={onRemove}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductDisplay;