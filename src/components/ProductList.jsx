import { useEffect, useState } from "react";

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
      <FilterProducts
        defaultValue="title"
        sortBy={sortBy}
        updatePosts={updatePosts}
      />
      <div className="row">
        {sortedProduct.map((product) => (
          <div
            className="mx-auto col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
