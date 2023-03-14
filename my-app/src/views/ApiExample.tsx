import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const ApiExample = () => {

    const [ data, setData ] = useState([] as any);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/ahmedu007/509b5df11d51a8e0252527aae1149fe4/raw/1325c13bcdc8591f0d5ca6c391de6bdb6ea72f29/productsApi")
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <Container fluid>
            <h1 className="text-center">API Example</h1>
            <Row>
                { data.map((item: any) => (
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.artist}</Card.Text>
                                <Card.Text>£{item.price}</Card.Text>
                                <p className="m-0 p-0 small text-muted">Genre: {item.genre}</p>
                                <p className="m-0 p-0 small text-muted">Free Shipping: {item.freeShipping ? "Yes" : "No"}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                )) }
            </Row>
        </Container>
    );
};

export default ApiExample;