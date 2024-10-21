import { createContext, useEffect, useState, ReactNode } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import data from "../userData";
import { LEAD_TABS } from "../constants";
import { StageType, UsersLeadDataType } from "../types";

// Define the type for header data
interface HeaderData {
  leadId: string;
  name: string;
  stage: StageType;
}

interface UserContextType {
  headerData: HeaderData;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  userData: UsersLeadDataType;
  fetchData: () => Promise<void>;
}

// Define the provider props (with children)
interface UserContextProviderProps {
  children: React.ReactNode;
}

// Create a context with a default value
export const UserContext = createContext<UserContextType | null>(null);

// The provider component with typed props
export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>(LEAD_TABS["lead-details"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { leadId } = useParams<{ leadId: string }>();

  useEffect(() => {
    if (leadId) {
      fetchData();
    }
  }, [leadId]);

  const fetchData = async () => {
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
