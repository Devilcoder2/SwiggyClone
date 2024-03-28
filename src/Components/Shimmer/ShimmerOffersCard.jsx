const ShimmerOffersCard = () => {
  return (
    <>
      <div className="w-[200px] h-[70px] mr-4 rounded-lg  border border-gray-300">
        <div className="flex mt-[12px] ml-2">
          <div
            alt="offer-logo"
            className="w-6 h-6 mr-2 bg-gray-300 rounded-full"
          ></div>
          <div className="h-4 w-32 mt-1 rounded-lg bg-gray-300"></div>
        </div>

        <div className="ml-3 mt-2">
          <div className="h-4 w-44 rounded-lg bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default ShimmerOffersCard;
