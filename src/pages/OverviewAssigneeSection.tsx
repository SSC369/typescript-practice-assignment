import React from "react";
import { TbPinned } from "react-icons/tb";
import dayjs from "dayjs";

import Assignees from "../components/Assignees";
import Overview from "../components/Overview";
import ToggleButton from "../components/ToggleButton";
import { DateFormatEnum, ReactFunctionType } from "../types";

const OverviewAssigneeSection: React.FC = () => {
  const date = dayjs(new Date()).format(DateFormatEnum.dateFormat);

  const renderCreatedOn: ReactFunctionType = () => {
    return (
      <div className="flex justify-between items-center gap-2 bg-white p-4 rounded-2xl text-slate-600 text-sm font-medium">
        <p className="">Created on</p>
        <p className="">{date}</p>
      </div>
    );
  };

  const renderPin: ReactFunctionType = () => {
    return (
      <div className="flex items-center gap-1 bg-white p-4 rounded-2xl text-slate-600">
        <TbPinned className="text-lg" />
        <p className="flex-grow text-sm font-medium">Pinned</p>
        <ToggleButton />
      </div>
    );
  };

  return (
    <section className="border-r-[1px] p-6 flex flex-col gap-4 max-h-[84dvh] w-1/3  overflow-auto custom-scrollbar">
      {renderPin()}
      {renderCreatedOn()}
      <Assignees />
      <Overview />
    </section>
  );
};

export default OverviewAssigneeSection;
