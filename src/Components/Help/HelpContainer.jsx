import { useState } from "react";
import Sidebar from "./Sidebar";
import { legal, patnerOnboarding, faqs } from "./HelpData";
import Accordian from "./Accordian";

const HelpContainer = () => {
  const [currSelected, setCurrSelected] = useState(0);
  const subHeadings = [patnerOnboarding, legal, faqs];

  return (
    <div className="w-[80rem] h-[45rem] bg-white flex custom-scroll">
      <div className="pt-[2rem] pl-[2rem]">
        <Sidebar setCurrSelected={setCurrSelected} />
      </div>

      <div className="ml-16 mt-20 ">
        <h1 className="text-[#282C3F] text-2xl font-bold">
          {currSelected === 0
            ? "Patner Onboarding"
            : currSelected === 1
            ? "Legal"
            : "FAQs"}
        </h1>

        <div className="mt-6 ">
          {subHeadings[currSelected].map((t) => {
            return <Accordian key={t.id} ques={t.ques} ans={t.ans} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpContainer;
