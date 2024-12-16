import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-3xl text-center py-8">
        <Title firstText={"Best"} secondText={"Seller"} />
        <p className="text-xs sm:text-sm md:text-base w-3/4 m-auto text-gray-600">
          This is the best seller collection in our including men, women and
          children clothes
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
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

export default BestSeller;
