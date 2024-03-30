const ShimmerOnMind = () => {
  const cardArray = new Array(9).fill(null);
  return (
    <div className="bg-gray-300 rounded-xl">
      <h1 className="font-bold text-2xl my-8 ml-[1.5rem]"></h1>

      <div className="relative ">
        <div className="flex overflow-hidden hide-scroll-bar justify-center">
          <div className="flex transition-transform duration-500 ease-in-out">
            {cardArray.map((t, idx) => (
              <div key={idx}>
                <div className="inline-block px-3 ">
                  <div className="w-32 h-32 max-w-xs overflow-hidden  bg-gray-300 ">
                    <img className="w-full h-full rounded-full object-cover hover:cursor-pointer bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <br />
      <hr></hr>
      <br />
    </div>
  );
};

export default ShimmerOnMind;
