import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const handelSubmitForm = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handelSubmitForm}
      className="flex flex-col w-[90%] sm:max-w-96 items-center m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="">
        <p className="text-3xl prata-regular">{currentState}</p>
        <p className="border-noen h-[1.5px] w-8 bg-gray-800"></p>
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="flex justify-between text-sm sm:mt-[-8px] w-full">
        <p className="cursor-pointer">Forget the password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Sign Up" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default Login;
