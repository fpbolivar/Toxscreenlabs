import { useState } from "react";
import AppHeading from "../../common/Heading";
import { howItWorksData } from "./utils";
import HowItsWorkCard from "../../common/HowItsWorkCard";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  let howitWork: any = [];
  const hows = [
    "In-person",
    "Home collection kit",
    "At-home test",
    "In home simple collection",
  ];

  if (active == 0) {
    howitWork = howItWorksData;
  }

  if (active == 1) {
    howitWork = howItWorksData.slice(0, 2);
  }

  if (active == 2) {
    howitWork = howItWorksData.slice(0, 3);
  }

  if (active == 3) {
    howitWork = howItWorksData.slice(0, 1);
  }
  return (
    <div className=" py-20 bg-lightGray ">
      <div className="w-[85%] mx-auto">
        <AppHeading title="How it’s work?" className="text-center" />
        <div className="mt-8 w-full">
          <div className="flex gap-4 w-full flex-wrap">
            {hows.map((how, i) => {
              return (
                <button
                  onClick={() => setActive(i)}
                  className={`px-4 py-1 rounded-[15px] border-2 border-darkBlue text-darkBlue font-semibold hover:bg-darkBlue transition-all hover:text-white ${
                    active == i ? "bg-darkBlue text-white" : ""
                  }`}
                  key={how}
                >
                  {how}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {howitWork?.map((data: any, i: any) => {
              return <HowItsWorkCard data={data} number={i + 1} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
