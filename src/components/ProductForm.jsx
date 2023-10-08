import { useState } from "react";

import supabase from "../supabase";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function createProduct() {
    console.log("first");
    try {
      const { error } = await supabase
        .from("products")
        .insert({
          title,
          price,
          image,
        })
        .single();

      if (error) {
        throw error;
      } else {
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <div className="row my-4 text-primary fw-bold">
        <div className="col-sm-6 col-lg-3">
          <label>Product Name</label>
          <input
            type="text"
            className="rounded form-control border border-primary shadow"
            id="name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <label>Product Price</label>
          <input
            type="text"
            className="rounded form-control border border-primary shadow"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-sm-6 col-lg-3">
          <label>Product Image URL</label>
          <input
            type="text"
            className="rounded form-control border border-primary shadow"
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="col-sm-6 d-flex col-lg-3">
          <button
            className="btn btn-primary w-100 m-auto mt-4"
            onClick={() => createProduct()}
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductForm;
