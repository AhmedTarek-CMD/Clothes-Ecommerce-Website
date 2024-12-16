import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [appear, setAppear] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  }, [location]);

  return showSearch && appear ? (
    <div className="border-t, border-b text-center bg-gray-50">
      <div className="inline-flex justify-center items-center border border-gray-500  px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="Search Icon" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt="Cross Icon"
        onClick={() => setShowSearch(false)}
        className="w-3 inline cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
