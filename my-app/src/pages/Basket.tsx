import { Col, Row, Stack } from "react-bootstrap";
import { IProduct } from "../class/IProduct";
import ProductDisplay from "../components/ProductDisplay";

export type BasketProps = {
    basketItems: IProduct[];
    onRemove: (id: string) => void;
};

export const Basket = ({basketItems, onRemove}: BasketProps) => {

    return (
        <>
            <Row style={{padding: "20px"}}>
                <h1 className="text-center">Basket 🧺</h1>
            </Row>
            <Row>
                <Col sm={8}>
                    <Row>
                        {basketItems.map(product => {
                            return (
                                <ProductDisplay 
                                    sm={3}
                                    key={product.id} 
                                    product={product} 
                                    onRemove={() => onRemove(product.id)} 
                                />
                            );
                        })}
                    </Row>
                </Col>
                <Col sm={4}>
                    <Stack gap={3}>
                    { 
                        basketItems.length === 0 
                            ? <h4>Your basket is empty!</h4>
                            : (
                                <>
                                    {basketItems.map(product => {
                                        return (
                                            <ProductDisplay 
                                                key={product.id} 
                                                product={product} 
                                                onRemove={() => onRemove(product.id)} 
                                            />
                                        );
                                    })}
                                </>
                            )
                    }
                    </Stack>
                </Col>
            </Row>
        </>
    );
}

export default Basket;