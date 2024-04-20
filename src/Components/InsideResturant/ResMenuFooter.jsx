/* eslint-disable */
const imageUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/";
const ResMenuFooter = ({ data }) => {
  const index =
    data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.length - 1;

  const footerData =
    data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[index].card.card;

  const { name, area, completeAddress } = footerData;
  return (
    <div className="bg-gray-100 text-gray-600 w-[1000px] h-[400px] mt-12 mx-auto">
      <div className="pt-8">
        <hr className=" border-gray-400 w-[940px] ml-10" />
      </div>
      <div className="pt-4 pl-10">
        <h1 className="font-semibold text-lg">{name}</h1>
        <h3 className="text-md">(Outlet:{area})</h3>
      </div>
      <div className="pl-10 text-sm mt-4 mb-6 text-gray-400">
        {completeAddress}
      </div>
      <hr className=" border-gray-400 w-[940px] ml-10" />

      <div className="w-full h-[130px] bg-gray-100">
        <div className=" text-center">
          <div className="mx-auto my-auto mt-6 text-black font-semibold text-lg ">
            <h1>For better experience,download the Swiggy app now</h1>
          </div>

          <div className="flex justify-center  mt-6">
            <img
              src={`${imageUrl}play_store.png`}
              alt="play-store-Logo"
              className=" w-48 h-[60px] mr-4"
            />
            <img
              src={`${imageUrl}app_store.png`}
              alt="app-store-logo"
              className="w-48 h-[60px] mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenuFooter;
