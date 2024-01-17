import PropTypes, { useContext } from "react";
import  ProductContext from "../Context/ProductContext";

const Product = ({ children, id }) => {
  const { deleteProduct } = useContext(ProductContext);
  return (
    <>
      {" "}
      <div className="my-4">
        <div className="card text-hite bg-primary mb-3">
          <div className="card-header">{children}</div>
        </div>
        <button onClick={() => deleteProduct(id)}>Delete</button>
      </div>
    </>
  );
};

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number,
};
Product.defaultProps = {
  label: "No product",
  price: 0,
};
export default Product;
