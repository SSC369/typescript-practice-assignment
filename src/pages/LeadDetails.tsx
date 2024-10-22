import React, { useContext } from "react";

import { UserContext } from "../context/userContext";
import LeadDetailsField from "../components/LeadDetailsField";
import { v4 } from "uuid";
import { ReactFunctionType } from "../types";

const LeadDetails: React.FC = () => {
  const contextUserData = useContext(UserContext)!.userData;
  const { gofs } = contextUserData;

  const renderGofs: ReactFunctionType = () => {
    return (
      <ul className="">
        {gofs?.map((gof) => {
          return <LeadDetailsField key={v4()} gof={gof} />;
        })}
      </ul>
    );
  };
  return (
    <div className="max-h-[74dvh] overflow-auto custom-scrollbar">
      <div className="flex items-center gap-4 mt-2">
        <h1 className="text-lg text-slate-600 font-semibold">Lead Details</h1>
        <hr className="text-slate-600 flex-grow h-2" />
      </div>
      {renderGofs()}
    </div>
  );
};

export default LeadDetails;
