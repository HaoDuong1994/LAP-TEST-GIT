import CartListItem from "./CartListItem";
import "./ProductList.css";
function CartList(props) {
  console.log(props.productsIncart);

  function removeFromCart(productId) {
    const updateProductIncart = props.productsIncart.filter(function (product) {
      return product.id !== productId;
    });
    console.log(updateProductIncart);
    props.updateCart(updateProductIncart);
  }
  return (
    <div className="product-list">
      {props.productsIncart.map((product) => {
        return (
          <CartListItem product={product} removeFromCart={removeFromCart} />
        );
      })}
    </div>
  );
}
export default CartList;
