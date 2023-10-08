import { Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const FilterProducts = ({ defaultValue, sortBy, updatePosts }) => {
  return (
    <>
      <span>Sort By</span>

      <Form.Select
        aria-label="Default"
        defaultValue={defaultValue}
        onChange={(e) => sortBy(e.target.value)}
      >
        <option value="title">None</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
      </Form.Select>

      <span>Sort By</span>
      <Form.Select
        defaultValue={"ascending"}
        onChange={(e) => updatePosts(e.target.value)}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </Form.Select>
    </>
  );
};
export default FilterProducts;
