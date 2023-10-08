import { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";

import supabase from "../supabase";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data, error } = await supabase.from("products").select();

    if (error) {
      console.log("error", error);
    }

    if (data) {
      setProducts(data);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Row xs={1} md={2} lg={3} className="g-4">
          {Products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default ProductList;
