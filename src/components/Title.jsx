const Title = ({ firstText, secondText }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {firstText}{" "}
        <span className="text-gray-700 font-medium">{secondText}</span>
      </p>
      <p className="w-8 sm-w-12 h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
