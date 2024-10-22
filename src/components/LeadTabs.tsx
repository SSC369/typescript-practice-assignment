import React, { useContext } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import {
  BsActivity,
  CgProfile,
  IoDocumentTextOutline,
  IoIosCall,
  LuFileEdit,
  TbHistory,
} from "../Icons";

import { LEAD_TABS } from "../constants";
import { UserContext } from "../context/userContext";
import { getTab } from "../utils/leadUtils";
import { LeadTabsEnum, LeadTabsNavigateEnum } from "../types";

const LeadTabs = () => {
  const activeTab = useContext(UserContext)!.activeTab;
  const setActiveTab = useContext(UserContext)!.setActiveTab;
  const navigate = useNavigate();

  const leadTabs = LEAD_TABS;
  //add enum here
  const renderTabIcon: (tab: string) => React.ReactNode = (tab) => {
    switch (tab) {
      case LeadTabsEnum["lead-details"]:
        return (
          <CgProfile
            className={`text-xl  ${
              activeTab === LeadTabsEnum["lead-details"]
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      case LeadTabsEnum.activities:
        return (
          <BsActivity
            className={`text-xl  ${
              activeTab === LeadTabsEnum.activities
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      case LeadTabsEnum.remarks:
        return (
          <LuFileEdit
            className={`text-xl  ${
              activeTab === LeadTabsEnum.remarks ? "text-sky" : "text-[#98A2B3]"
            }`}
          />
        );
      case LeadTabsEnum.documents:
        return (
          <IoDocumentTextOutline
            className={`text-xl  ${
              activeTab === LeadTabsEnum.documents
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      case LeadTabsEnum["call-log"]:
        return (
          <IoIosCall
            className={`text-xl  ${
              activeTab === LeadTabsEnum["call-log"]
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      case LeadTabsEnum["history-log"]:
        return (
          <TbHistory
            className={`text-xl  ${
              activeTab === LeadTabsEnum["history-log"]
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      default:
        break;
    }
  };

  const handleTabClick: (tab: string) => void = (tab) => {
    const navigateTab =
      LeadTabsNavigateEnum[tab as keyof typeof LeadTabsNavigateEnum];
    navigate(navigateTab);
    setActiveTab(tab);
  };

  const renderTab: (data: string, tab: string) => React.ReactNode = (
    data,
    tab
  ) => {
    return (
      <li
        onClick={() => handleTabClick(data)}
        className={`flex cursor-pointer justify-center items-center gap-2 pb-2  ${
          activeTab === data && "border-b-2 border-solid border-sky"
        }`}
        key={v4()}
      >
        {renderTabIcon(data)}
        <p
          className={`text-sm text-[#667085] font-medium ${
            activeTab === data && "text-sky"
          }`}
        >
          {tab}
        </p>
      </li>
    );
  };

  return (
    <ul className="static z-[100]  bg-slate-100 flex items-center gap-4 border-b-[1px] overflow-auto custom-scrollbar">
      {leadTabs.map((data) => {
        const tab = getTab(data);
        return renderTab(data, tab);
      })}
    </ul>
  );
};

export default LeadTabs;
