import React, { useState } from "react";
import { FaChevronDown } from "../Icons";

import Gof from "./Gof";
import { v4 } from "uuid";
import { GofsType, ReactFunctionType } from "../types";

const LeadDetailsField: React.FC<{ gof: GofsType }> = ({ gof }) => {
  const [showMore, setShowMore] = useState(false); //add type
  const { name } = gof;

  const renderGof: (gof: GofsType) => React.ReactNode = (gof) => {
    if (gof.fields.length === 0) {
      return <p className="">-</p>;
    }
    return (
      <ul className="flex gap-6 flex-wrap">
        {gof.fields.map((field) => {
          return <Gof field={field} key={v4()} />;
        })}
      </ul>
    );
  };

  const renderGofs: (gof: GofsType) => React.ReactNode = (gof) => {
    return (
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showMore
            ? "max-h-[400px] opacity-100 pt-6 pb-3 px-6"
            : "max-h-0 opacity-0"
        }`}
      >
        {renderGof(gof)}
      </div>
    );
  };

  const renderShowButton: ReactFunctionType = () => {
    return (
      <button>
        <FaChevronDown
          className={`transition-transform duration-300 ease-in-out text-slate-500 ${
            showMore ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    );
  };

  const handleToggle = (e: React.SyntheticEvent<EventTarget>) => {
    setShowMore(!showMore);
    e.stopPropagation();
  };

  return (
    <div className="mt-4 flex flex-col  justify-between bg-white py-4 pr-4 rounded-2xl hover:bg-slate-50 mr-4">
      <div
        onClick={handleToggle}
        className="flex items-center justify-between relative w-full"
      >
        <div className="h-6 w-[3px] rounded-r-lg bg-blue-600 absolute left-0"></div>
        <h1 className="text-slate-800 text-sm font-medium ml-4">{name}</h1>
        {renderShowButton()}
      </div>

      {renderGofs(gof)}
    </div>
  );
};

export default LeadDetailsField;
