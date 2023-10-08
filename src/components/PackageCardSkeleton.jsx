const ProductCardSkeleton = () => {
  return (
    <div className=" card">
      <div
        style={{ height: "200px" }}
        className="bg-dark opacity-25 rounded-top"
      />
      <div className="card-body d-flex flex-column">
        <div className="w-100 bg-secondary opacity-25 rounded mt-2 pt-1" />
        <div className="w-100 bg-secondary opacity-25 rounded mt-3 pt-1" />
      </div>
    </div>
  );
};
export default ProductCardSkeleton;
