import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, price, image, name }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition-all ease-in-out"
          src={image[0]}
          alt="Image"
        />
        <p className="pt-3 pd-1 text-sm">{name}</p>
        <p className="font-medium text-sm">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
