const ShimmerOnMind = () => {
  const cardArray = new Array(9).fill(null);
  return (
    <>
      <h1 className="font-bold text-2xl my-8 ml-[1.5rem]">{`What's on your mind?`}</h1>

      <div className="relative">
        <button
          className={`absolute top-4 right-4 z-10 bg-white rounded-full p-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex overflow-hidden hide-scroll-bar justify-center">
          <div className="flex transition-transform duration-500 ease-in-out">
            {cardArray.map((t, idx) => (
              <div key={idx}>
                <div className="inline-block px-3 ">
                  <div className="w-32 h-32 max-w-xs overflow-hidden rounded-lg bg-white ">
                    <img className="w-full h-full object-cover hover:cursor-pointer bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`absolute top-16 right-4 z-10 bg-white rounded-full p-2 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <br />
      <hr></hr>
      <br />
    </>
  );
};

export default ShimmerOnMind;
