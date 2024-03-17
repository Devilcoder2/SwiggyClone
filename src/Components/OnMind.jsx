import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const OnMind = ({ data }) => {
  const newData = data.data.cards[0].card.card.gridElements.infoWithStyle.info;
  const imageLink = "https://media-assets.swiggy.com/swiggy/image/upload/";

  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    // Calculate the number of visible items based on container width and image width
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = 120; // Adjust this value as per your image width
    const itemsPerRow = Math.floor(containerWidth / itemWidth);
    setVisibleItems(itemsPerRow);
  }, []);

  const nextItems = () => {
    if (startIndex + visibleItems < newData.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevItems = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl my-8 ml-[1.5rem]">{`What's on your mind?`}</h1>

      <div className="relative">
        <button
          className={`absolute top-4 right-4 z-10 bg-white rounded-full p-2 ${
            startIndex === 0 ? "pointer-events-none" : ""
          }`}
          onClick={prevItems}
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
        <div
          ref={containerRef}
          className="flex overflow-hidden hide-scroll-bar justify-center"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${startIndex * 120}px)` }}
          >
            {newData.map((t) => (
              <div key={t.id}>
                <div className="inline-block px-3">
                  <div className="w-32 h-32 max-w-xs overflow-hidden rounded-lg bg-white">
                    <img
                      src={`${imageLink}${t.imageId}`}
                      className="w-full h-full object-cover hover:cursor-pointer"
                      onClick={() => {
                        console.log("button clicked");
                      }}
                      alt={t.altText}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`absolute top-16 right-4 z-10 bg-white rounded-full p-2 ${
            startIndex + visibleItems >= newData.length
              ? "pointer-events-none"
              : ""
          }`}
          onClick={nextItems}
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

OnMind.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OnMind;
