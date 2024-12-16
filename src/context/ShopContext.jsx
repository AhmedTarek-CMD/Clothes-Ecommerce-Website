import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivary_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error("Select The Size First.");
      return;
    }
    if (cartItems[itemId]) {
      if (cartItems[itemId][size]) {
        cartData[itemId][size] += 1;
        setCartItems(cartData);
        toast.info(
          `Increased quantity for size "${size}" of item "${itemId}".`
        );
      } else {
        cartData[itemId][size] = 1;
        setCartItems(cartData);
        toast.success(`Added size "${size}" of item "${itemId}" to the cart.`);
      }
    } else {
      cartData[itemId] = { [size]: 1 };
      setCartItems(cartData);
      toast.success(`Added size "${size}" of item "${itemId}" to the cart.`);
    }
  };

  const getCountCart = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating total cart count:", error);
        }
        return totalCount;
      }
    }
  };

  const updateQuantity = async (quantity, size, itemId) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          totalAmount += itemInfo.price * cartItems[items][item];
        } catch (error) {
          console.error("Error calculating total cart amount:", error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivary_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCountCart,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
