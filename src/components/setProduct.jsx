import { useState } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";

import supabase from "../supabase";

const SetProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
          title,
          price,
          image,
        })
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Row className="items-center w-75">
      <Col xs={12} md={8}>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="text"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Form.Label>Product Image URL</Form.Label>
        <Form.Control
          type="text"
          id="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <Button className="m-2" onClick={() => createProduct()}>
          Create Product
        </Button>
      </Col>
    </Row>
  );
};
export default SetProduct;
