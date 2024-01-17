import { useParams } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import { useContext } from "react";

const ShowProduct = () => {
  const myParam = useParams();
  const { products } = useContext(ProductContext);
  const myProduct = products.find((product) => product.id === +myParam.id);

  return (
    <>
      <h1>{myProduct.label}</h1>
      <button className="btn btn-success">{myProduct.price}</button>
    </>
  );
};

export default ShowProduct;
