import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  HeaderData,
  LeadTabsEnum,
  UserContextProviderProps,
  UserContextType,
} from "../types";
import dataStore from "../store/DataStore";
import LeadDataModel from "../models/LeadDataModel";
import Loader from "../components/Loader";

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string>(LeadTabsEnum.leadDetails);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const leadId: string = useParams().leadId!;

  useEffect(() => {
    if (leadId) {
      fetchData();
    }
  }, [leadId]);

  const fetchData: () => Promise<void> = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dataStore.setLeadDataStore();

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isLoading) {
    const leadDataMap: Map<string, LeadDataModel> = dataStore.getLeadData();
    let userData: LeadDataModel = leadDataMap.get(leadId)!;
    const { name, stage } = userData;
    const headerData: HeaderData = { leadId: userData.leadId, name, stage };
    return (
      <UserContext.Provider
        value={{
          headerData,
          activeTab,
          setActiveTab,
          userData,
          fetchData,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }

  return null;
};
