// eslint-disable-next-line react/prop-types
const FilterProducts = ({ defaultValue, sortBy, updatePosts }) => {
  return (
    <div className="row my-3">
      <div className="col-6 col-md-4 col-lg-3">
        <span className="mx-1">Sort By</span>
        <select
          className="form-select border border-secondary shadow"
          aria-label="Default"
          defaultValue={defaultValue}
          onChange={(e) => sortBy(e.target.value)}
        >
          <option value="title">None</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        <span className="mx-1">Sort By</span>
        <select
          className="form-select border border-secondary shadow"
          defaultValue={"ascending"}
          onChange={(e) => updatePosts(e.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
  );
};
export default FilterProducts;
