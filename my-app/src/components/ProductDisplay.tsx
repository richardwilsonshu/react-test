import { Button, Card } from "react-bootstrap";
import { IProduct } from "../class/IProduct";

export type ProductDisplayProps = {
    product: IProduct
};

export const ProductDisplay = ({product}: ProductDisplayProps) => {
    return (

        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>£{product.price}</Card.Text>
                <Button variant="danger" onClick={() => { console.log("Some magic needed here!") }}>Remove</Button>
            </Card.Body>
        </Card>

        // <div style={{"padding": "10px", "backgroundColor": "lightyellow", "maxWidth": "400px"}}>
        //     <h3>{product.name}</h3>
        //     <p>{product.description}</p>
        //     <p>£{product.price}</p>
        // </div>
    );
}

export default ProductDisplay;