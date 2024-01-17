import { useContext, useState } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";
import ProductContext from "../Context/ProductContext";

const Products = () => {
  const { products, addProduct } = useContext(ProductContext);
  let showList = true;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const titleInput = (e) => {
    if (e.target.value === " ") {
      setMessage("title is required");
    } else if (e.target.value.trim().length < 3) {
      setMessage("title must be at least three characters");
    } else {
      setMessage(null);
      setTitle(e.target.value);
    }
  };
  const priceInput = (e) => {
    setPrice(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    let myProduct = {
      id: uuidv4(),
      label: title,
      price,
    };
    addProduct(myProduct);
    setTitle("");
    setPrice(0);
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="form-group my-2">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={titleInput}
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
          {message && <div className="alert alert-danger">{message}</div>}
        </div>
        <div className="form-group my-2">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            value={price}
            onChange={priceInput}
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
          <button className="btn my-4">Save</button>
        </div>
      </form>
      <Counter />
      {showList && (
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <Product id={product.id}>
                <div className="card-body">
                  <h4 className="card-title">{product.label}</h4>
                  <p className="card-text">
                    <button className="btn btn-danger">{product.price}</button>
                  </p>
                </div>
              </Product>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
