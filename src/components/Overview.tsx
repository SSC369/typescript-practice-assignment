import React, { useContext, useState } from "react";
import { FaChevronDown } from "../Icons";
import { observer } from "mobx-react-lite";

import { UserContext } from "../context/userContext";
import Field from "./Field";
import { ReactFunctionType, ShowLimitEnum, VoidFunctionType } from "../types";
import OverviewModel from "../models/OverviewModel";

const Overview: React.FC = observer(() => {
  const [overviewShowLimit, setOverViewShowLimit] = useState<number>(
    ShowLimitEnum.overviewFieldsShowLimit
  );

  const contextUserData = useContext(UserContext)!.userData;
  const overviewFieldsMap: Map<string, OverviewModel> =
    contextUserData.overviewFields!;

  const overviewFields: string[] = Array.from(overviewFieldsMap.keys());

  let overviewLimitData: string[];
  if (overviewFieldsMap.size > overviewShowLimit) {
    overviewLimitData = overviewFields!.slice(
      0,
      ShowLimitEnum.overviewFieldsShowLimit
    );
  } else {
    overviewLimitData = overviewFields;
  }

  const renderOverviewField: (field: string) => React.ReactNode = (field) => {
    const { name, value, fieldType, fieldId } = overviewFieldsMap.get(field)!;
    return (
      <li
        className="flex items-center border-b-[1px] last:border-none text-slate-800 pb-4"
        key={fieldId}
      >
        <p className="flex-grow  text-slate-600 w-1/2 text-sm">{name}</p>
        <Field value={value} fieldType={fieldType} />
      </li>
    );
  };

  const renderOverviewFields: ReactFunctionType = () => {
    return (
      <ul className="flex flex-col gap-4 ">
        {overviewLimitData.map((field: string) => {
          return renderOverviewField(field);
        })}
      </ul>
    );
  };

  const handleClickSeeMore: VoidFunctionType = () => {
    if (overviewShowLimit === overviewFieldsMap.size) {
      setOverViewShowLimit(ShowLimitEnum.overviewFieldsShowLimit);
    } else {
      setOverViewShowLimit(overviewFieldsMap.size);
    }
  };

  const renderSeeMoreButtonText: () => string = () => {
    if (overviewShowLimit < overviewFieldsMap.size) {
      return "See More";
    }
    return "See Less";
  };

  const renderSeeMoreButton: () => React.ReactNode = () => {
    if (overviewFieldsMap.size === ShowLimitEnum.overviewFieldsShowLimit) {
      return <></>;
    }
    if (overviewShowLimit <= overviewFieldsMap.size) {
      return (
        <button
          onClick={handleClickSeeMore}
          className="flex items-center gap-1 text-xs self-center"
        >
          <p className="text-sky font-semibold">{renderSeeMoreButtonText()}</p>
          <FaChevronDown
            className={`transition-transform duration-300 ease-in-out ${
              overviewShowLimit < overviewFieldsMap.size
                ? "rotate-0"
                : "rotate-180"
            }`}
          />
        </button>
      );
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl text-slate-600">
      <h1 className="text-sm font-medium">Overview</h1>
      {renderOverviewFields()}
      {renderSeeMoreButton()}
    </div>
  );
});

export default Overview;
