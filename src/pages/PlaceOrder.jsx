import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMetod] = useState("");
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title firstText={"DELIVARY"} secondText={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
          placeholder="Email"
        />
        <input
          type="text"
          className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="ZipCode"
          />
          <input
            type="text"
            className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="rounded border border-gray-300 py-1.5 px-3.5 w-full"
          placeholder="Phone"
        />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title firstText={"PAYMENT"} secondText={"METHODA"} />
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMetod("stripe")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method === "stripe" ? "bg-green-700" : ""
                }`}
              ></p>
              <img
                src={assets.stripe_logo}
                className="h-5 mx-4"
                alt="Strip Logo"
              />
            </div>
            <div
              onClick={() => setMetod("razorpay")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method === "razorpay" ? "bg-green-700" : ""
                }`}
              ></p>
              <img
                src={assets.razorpay_logo}
                className="h-5 mx-4"
                alt="Strip Logo"
              />
            </div>
            <div
              onClick={() => setMetod("cod")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border ${
                  method === "cod" ? "bg-green-700" : ""
                }`}
              ></p>
              <p className="text-sm font-medium mx-4 text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="mt-8 w-full text-end">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
