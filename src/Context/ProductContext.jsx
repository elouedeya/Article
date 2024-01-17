import { createContext } from "react";

const ProductContext = createContext();
// Provider Component
// export const ProductProvider = ({ children }) => {

//   const [products, setProducts] = useState([
//     {
//       id:1,
//       label:"Iphonex",
//       price:4000
//     }, 
//     {
//       id:2,
//       label:"Iphone14",
//       price:100
//     }
//   ]);
//   const deleteProduct=(id)=>{
//     let myList = products.filter(product=>product.id !== id);
//     setProducts(myList)
//   }

//   const addProduct = (item)=>{
//       setProducts([item, ...products])
//   }
//   return (
//     <ProductContext.Provider
//       value={
//         { message: "salem Toutta",
//          title: "touta",
//          products,
//          setProducts,
//          deleteProduct,
//          addProduct

//          }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };


export default ProductContext;