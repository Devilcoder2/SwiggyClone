import ShimmerCard from "./ShimmerCard";

const ShimmerFoodTypeRes = () => {
  const cardArray = new Array(9).fill(null);
  return (
    <>
      <div className="mx-36 mt-12 bg-gray">
        <div className="font-bold text-4xl h-8 w-64 rounded-lg text-gray-700 bg-gray-300"></div>
        <div className="mt-4 text-lg mb-2 text-gray-600 h-6 w-96 rounded-lg bg-gray-300"></div>
        <h1 className="text-xl mt-12 font-semibold">Restaurants to explore</h1>
      </div>

      <div className="flex flex-wrap justify-center mx-8">
        {cardArray.map((t, i) => {
          return <ShimmerCard key={i} />;
        })}
      </div>
    </>
  );
};

export default ShimmerFoodTypeRes;
