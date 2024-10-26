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
  const [userData, setUserData] = useState<LeadDataModel | null | undefined>(
    null
  );
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
    dataStore.setLeadDataStore();
    const leadDataMap: Map<string, LeadDataModel> = dataStore.getLeadData();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const leadData: LeadDataModel = leadDataMap.get(leadId)!;
    console.log(leadData);
    if (leadData) {
      setUserData(leadData);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isLoading && userData) {
    const { leadId, name, stage } = userData;
    const headerData: HeaderData = { leadId, name, stage };
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
