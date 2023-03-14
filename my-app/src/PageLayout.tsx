import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PageLayout = ({children}: any) => {
    return (
        <>
            <Navbar bg="light">
                <Nav.Item>
                    <Link className="me-3" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="me-3" to="/basket">Basket</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="me-3" to="/api-example">API Example</Link>
                </Nav.Item>
            </Navbar>
            {children}
        </>

    );
};

export default PageLayout;