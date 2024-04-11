import { useEffect, useState, useRef } from "react";

const imageLink = "https://media-assets.swiggy.com/swiggy/image/upload/";
const Search = () => {
  const [newData, setNewData] = useState([]);

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

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=26.4677641&lng=80.31225769999999"
    );

    const data = await response.json();
    console.log(data.data.cards);
    setNewData(data.data.cards[1].card.card.imageGridCards.info);
  };

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

  const clickHandler = async (data) => {
    const url = data.entityId;
    const regex = /collection_id=(\d+)/;
    const match = url.match(regex);
    let collectionId = match ? match[1] : null;

    if (collectionId === null) {
      collectionId = data.entityId;
    }

    window.location.href = `/${collectionId}`;
  };

  return (
    <>
      <div className="flex flex-col  items-center mt-16">
        <div>
          <input
            placeholder="Search for resturants"
            className="border-gray-400 border p-3 rounded-sm text-gray-600 font-semibold w-[800px] focus:outline-none"
          />
        </div>

        <div className="mt-8 ml-12 overflow-hidden">
          <div>
            <h1 className="font-extrabold mb-8 text-gray-700 text-lg">
              Popular Cuisines
            </h1>
          </div>

          <div className="relative w-[800px]">
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
                style={{ transform: `translateX(-${startIndex * 200}px)` }}
              >
                {newData.map((t) => (
                  <div key={t.id}>
                    <div className="inline-block px-1">
                      <div className="w-32 h-32 max-w-xs overflow-hidden rounded-lg bg-white">
                        <img
                          src={`${imageLink}${t.imageId}`}
                          className="w-24 h-24 object-cover hover:cursor-pointer"
                          onClick={() => clickHandler(t)}
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
        </div>
      </div>
    </>
  );
};

export default Search;
