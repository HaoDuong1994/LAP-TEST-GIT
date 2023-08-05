import "./ProductItem.css";
function CartListItem(props) {
  console.log(props);
  const { id, name, price, description, image } = props.product;
  return (
    <div className="product-item">
      <img className="product-img" src={"https://xcafe.space" + image}></img>
      <h2>{name}</h2>
      <div>
        <h4>{price}</h4>
        <p>{description}</p>
      </div>
      <button>Xóa khỏi giỏ hàng</button>
    </div>
  );
}
export default CartListItem;
