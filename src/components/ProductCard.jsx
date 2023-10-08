const ProductCard = ({ product }) => {
  return (
    <div className="text-primary-dark card">
      <img
        style={{ height: "200px" }}
        className="card-img-top img-thumbnail object-fit-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="card-body">
        <p className="card-title fw-semibold">{product.title}</p>
        <p className="card-text fw-bold">{product.price}$</p>
      </div>
    </div>
  );
};
export default ProductCard;
