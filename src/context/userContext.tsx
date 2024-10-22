import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import data from "../userData";
import {
  HeaderData,
  LeadTabsEnum,
  UserContextProviderProps,
  UserContextType,
  UsersLeadDataType,
} from "../types";

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<
    UsersLeadDataType | null | undefined
  >(null);
  const [activeTab, setActiveTab] = useState<string>(
    LeadTabsEnum["lead-details"]
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { leadId } = useParams<{ leadId: string }>();

  useEffect(() => {
    if (leadId) {
      fetchData();
    }
  }, [leadId]);

  const fetchData: () => Promise<void> = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const leadData = data.find((lead) => lead.leadId === leadId);
    setUserData(leadData);
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
