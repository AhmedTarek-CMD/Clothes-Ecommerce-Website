import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useState } from "react";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-3xl text-center py-8">
        <Title firstText={"Latest"} secondText={"Collection"} />
        <p className="text-xs sm:text-sm md:text-base w-3/4 m-auto text-gray-600">
          This is a new collection from modern and amazing clothes including
          men, women and children clothes
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            price={item.price}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
