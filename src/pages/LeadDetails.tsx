import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { v4 } from "uuid";

import { UserContext } from "../context/userContext";
import LeadDetailsField from "../components/LeadDetailsField";
import { ReactFunctionType } from "../types";
import GofModel from "../models/GofModel";

const LeadDetails: React.FC = observer(() => {
  const contextUserData = useContext(UserContext)!.userData;
  const gofs: GofModel[] = contextUserData.gofs;

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
});

export default LeadDetails;
