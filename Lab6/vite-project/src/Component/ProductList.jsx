import ProductItem from "./ProductItem";
import "./ProductList.css";
function ProductList(props) {
  const { products, addProduct } = props;
  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            products={product}
            addProduct={addProduct}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
