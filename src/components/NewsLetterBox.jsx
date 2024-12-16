const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };
  return (
    <div className="text-center">
      <p className="text-gray-800 text-2xl font-medium">
        Subscribe Now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Get the offer by subscribe and login to our website.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          required
          className="sm:flex-1 w-full outline-none"
          type="email"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="bg-black text-white py-4 px-10 text-xs"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
