import { lazy, Suspense } from "react";

const ProductList = lazy(() => import("./components/ProductList"));
const ProductForm = lazy(() => import("./components/ProductForm"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center m-auto w-100 vh-100 flex-column">
          <div className="spinner-border " role="status"></div>
          <span className="my-2">Loading...</span>
        </div>
      }
    >
      <div className="main-content">
        <div className="container-fluid p-5 bg-primary text-white text-center">
          <h2>Task: E-commerce Product Listing Page</h2>
          <a>ScalesOps</a>
        </div>
        <div className="products-list">
          <ProductForm />
          <h3 className="container-fluid p-3 bg-primary text-white text-center">
            E-Commerce Products
          </h3>
          <ProductList />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
