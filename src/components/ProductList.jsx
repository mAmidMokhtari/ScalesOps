import { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";

import supabase from "../supabase";
import FilterProducts from "./FilterProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [sortType, setSortType] = useState("ascending");
  const [sortByField, setSortByField] = useState("title");
  const [sortedProduct, setSortedProduct] = useState([]);

  function sortFunc(results, sortType, sortByField) {
    if (sortType === "ascending") {
      results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
    } else if (sortType === "descending") {
      results.sort((a, b) => (b[sortByField] > a[sortByField] ? 1 : -1));
    }
    return results;
  }

  function updatePosts(e) {
    setSortType(e);
    setSortedProduct(sortFunc(sortedProduct, e, sortByField));
  }

  function sortBy(e) {
    setSortByField(e);

    setSortedProduct(sortFunc(sortedProduct, sortType, e));
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data, error } = await supabase.from("products").select();

    if (error) {
      console.log("error", error);
    }

    if (data) {
      setSortedProduct(sortFunc(data, sortType, sortByField));
      console.log(data);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <FilterProducts
            defaultValue="title"
            sortBy={sortBy}
            updatePosts={updatePosts}
          />
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {sortedProduct.map((product) => (
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
