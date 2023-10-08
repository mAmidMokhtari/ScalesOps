import { Container, Nav, Navbar } from "react-bootstrap";

import ProductList from "./components/ProductList";

const App = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h2>Store Products</h2>
          </Navbar.Brand>
          <Nav>
            <Nav.Item>
              <h3>ScalesOps Task</h3>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h3 className="text-center">E-Commerce Products</h3>
        <ProductList />
      </Container>
    </>
  );
};

export default App;
