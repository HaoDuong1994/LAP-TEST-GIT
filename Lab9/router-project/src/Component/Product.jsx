import { Link } from "react-router-dom";
function Product() {
  const mockProduct = Array.from({ length: 10 });
  console.log(mockProduct);
  return (
    <div>
      {mockProduct.map((product, index) => {
        return (
          <di>
            <h3>Product {index + 1}</h3>
            <button>
              <Link to={`/product/${index + 1}`}>View detail</Link>
            </button>
          </di>
        );
      })}
    </div>
  );
}
export default Product;
