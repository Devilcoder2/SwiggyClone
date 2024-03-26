/* eslint-disable */

const ResMenuHeader = ({ data }) => {
  const realData = data.data.cards[2].card.card.info;
  const {
    city,
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    totalRatings,
    feeDetails,
    costForTwoMessage,
  } = realData;

  const cusinisString = cuisines.join(", ");

  return (
    <>
      <div className="ml-[350px] mt-16">
        <p className="ml-[-10px] text-[10px] text-gray-500">
          {`Home / ${city} / `}
          <span className="text-gray-700 font-semibold">{`${name}`}</span>
        </p>

        <div className="mt-10">
          <h1 className="text-xl tracking-wide text-gray-800 font-bold">
            {name}
          </h1>

          <div className="flex justify-between text-[13px] mb-4 mt-2 text-gray-500">
            <div>
              <h4>{cusinisString}</h4>
              <h3>{`${areaName}, ${sla.lastMileTravelString}`}</h3>
            </div>
            <div className="mr-[380px] border border-gray-300 rounded-md py-2 px-1 mt-[-40px]">
              <h2 className=" font-extrabold text-[15px] text-green-600 ml-[6px] mb-1">
                <span className="fa fa-star checked-green mr-1"></span>
                {avgRating}
              </h2>
              <hr className="w-14 mt-2 font-semibold mx-auto"></hr>
              <h4 className="text-[10px] font-bold mt-4 text-gray-400">{`${totalRatings}+ ratings`}</h4>
            </div>
          </div>

          {feeDetails.message !== undefined && (
            <div className="flex mb-4">
              <img
                className="w-4 h-4 mt-1  mr-2"
                src="https://shorturl.at/uvKPV"
                alt="delivery time icon"
              />
              <h2 className="text-[14px] text-gray-500">
                {feeDetails.message}
              </h2>
            </div>
          )}

          <hr className="decoration-dashed  mr-[380px]"></hr>

          <div className="flex text-[14px] mt-4 text-gray-700 font-bold">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
            <h2 className="px-2 font-extrabold  mt-[-1px]">{sla.slaString}</h2>
            <svg
              className="mx-4"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
            <h1 className="mx-[-8px] mt-[-1px] font-extrabold">
              {costForTwoMessage}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResMenuHeader;
