import "./ProductItem.css";
function ProductItem(props) {
  console.log(props);

  const { id, name, price, description, image, isSoldOut, sizes } =
    props.products;
  function onClickAddCart(object) {
    console.log(object);
    props.addProduct(object);
  }

  return (
    <div className="product-item">
      <img className="product-img" src={"https://xcafe.space" + image} alt="" />
      <h2>{name}</h2>
      <div>
        <h4>{price}</h4>
        <p>{description}</p>
      </div>
      <button
        onClick={() => {
          onClickAddCart(props.products);
        }}>
        Add to cart
      </button>
      <button>Delete to cart</button>
    </div>
  );
}

export default ProductItem;
