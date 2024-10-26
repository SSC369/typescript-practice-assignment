import React, { useContext, useState } from "react";
import { v4 } from "uuid";
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
  const { overviewFields } = contextUserData;

  let overviewLimitData: OverviewModel[];
  if (overviewFields!.length > overviewShowLimit) {
    overviewLimitData = overviewFields!.slice(
      0,
      ShowLimitEnum.overviewFieldsShowLimit
    );
  } else {
    overviewLimitData = overviewFields;
  }

  const renderOverviewField: (field: OverviewModel) => React.ReactNode = (
    field
  ) => {
    const { name, value, fieldType } = field;
    return (
      <li
        className="flex items-center border-b-[1px] last:border-none text-slate-800 pb-4"
        key={v4()}
      >
        <p className="flex-grow  text-slate-600 w-1/2 text-sm">{name}</p>
        <Field value={value} fieldType={fieldType} />
      </li>
    );
  };

  const renderOverviewFields: ReactFunctionType = () => {
    return (
      <ul className="flex flex-col gap-4 ">
        {overviewLimitData.map((field: any) => {
          return renderOverviewField(field);
        })}
      </ul>
    );
  };

  const handleClickSeeMore: VoidFunctionType = () => {
    if (overviewShowLimit === overviewFields.length) {
      setOverViewShowLimit(ShowLimitEnum.overviewFieldsShowLimit);
    } else {
      setOverViewShowLimit(overviewFields.length);
    }
  };

  const renderSeeMoreButtonText: () => string = () => {
    if (overviewShowLimit < overviewFields.length) {
      return "See More";
    }
    return "See Less";
  };

  const renderSeeMoreButton: () => React.ReactNode = () => {
    if (overviewFields.length === ShowLimitEnum.overviewFieldsShowLimit) {
      return <></>;
    }
    if (overviewShowLimit <= overviewFields.length) {
      return (
        <button
          onClick={handleClickSeeMore}
          className="flex items-center gap-1 text-xs self-center"
        >
          <p className="text-sky font-semibold">{renderSeeMoreButtonText()}</p>
          <FaChevronDown
            className={`transition-transform duration-300 ease-in-out ${
              overviewShowLimit < overviewFields.length
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
