import CartListItem from "./CartListItem";
import "./ProductList.css";
function CartList(props) {
  console.log(props.productsIncart);
  return (
    <div className="product-list">
      {props.productsIncart.map((product) => {
        return <CartListItem product={product} />;
      })}
    </div>
  );
}
export default CartList;
