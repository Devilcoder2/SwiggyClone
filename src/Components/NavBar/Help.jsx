import HelpContainer from "../Help/HelpContainer";

const Help = () => {
  return (
    <div className="bg-[#37718E] h-[120vh] -mt-4 text-white">
      <div className="pt-12 pl-40">
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p>Let&#8217;s take a step ahead and help you better.</p>
      </div>

      <div className="pl-32 mt-8">
        <HelpContainer />
      </div>
    </div>
  );
};

export default Help;
