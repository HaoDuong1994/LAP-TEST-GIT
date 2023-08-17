import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      Product Detail {param.prod}
      <button>
        <Link to="/product">Back</Link>
      </button>
    </div>
  );
}
export default ProductDetail;
