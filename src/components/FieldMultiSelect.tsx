import { v4 } from "uuid";
import { MULTI_SELECT_LIMIT } from "../constants";
import React from "react";
import { ReactFunctionType } from "../types";

const FieldMultiSelect: React.FC<{ value: string[] }> = ({ value }) => {
  const multiSelectLimitData = value.slice(0, MULTI_SELECT_LIMIT);
  const diff = value.length - MULTI_SELECT_LIMIT;

  const renderCount: ReactFunctionType = () => {
    if (diff > 0) {
      return <p className="text-slate-700">+{diff}</p>;
    }
  };

  return (
    <>
      <ul className="flex flex-wrap items-center custom-scrollbar pb-2 gap-2 ">
        {multiSelectLimitData.map((data) => {
          return (
            <li
              key={v4()}
              className="whitespace-nowrap text-xs p-1 px-2 rounded-xl font-medium bg-sky text-sky"
            >
              <p>{data}</p>
            </li>
          );
        })}
      </ul>

      {renderCount()}
    </>
  );
};
export default FieldMultiSelect;
