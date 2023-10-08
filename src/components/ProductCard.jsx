import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem", height: "16rem" }}>
      <Card.Body>
        <Card.Img variant="top" className="card-image" src={product.image} />
        <Card.Title>Name : {product.title}</Card.Title>
        <Card.Text>Price : {product.price}$</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
