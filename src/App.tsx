import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LeadPage from "./pages/LeadPage";
import LeadDetails from "./pages/LeadDetails";
import Activities from "./pages/Activities";
import Documents from "./pages/Documents";
import CallLog from "./pages/CallLog";
import Remarks from "./pages/Remarks";
import HistoryLog from "./pages/HistoryLog";
import Users from "./pages/Users";
import { UserContextProvider } from "./context/userContext";
import { LeadTabsNavigateEnum, NavigationRoutesEnum } from "./types";
import dataStore from "./store/DataStore";

const App: React.FC = () => {
  useEffect(() => {
    dataStore.setUsersData();
    dataStore.setLeadDataStore();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={NavigationRoutesEnum.leadViewPagePath + "/:leadId"}
          element={
            <UserContextProvider>
              <LeadPage />
            </UserContextProvider>
          }
        >
          <Route
            path={LeadTabsNavigateEnum["lead-details"]}
            element={<LeadDetails />}
          />
          <Route
            path={LeadTabsNavigateEnum.activities}
            element={<Activities />}
          />
          <Route
            path={LeadTabsNavigateEnum.documents}
            element={<Documents />}
          />
          <Route
            path={LeadTabsNavigateEnum["call-log"]}
            element={<CallLog />}
          />
          <Route path={LeadTabsNavigateEnum.remarks} element={<Remarks />} />
          <Route
            path={LeadTabsNavigateEnum["history-log"]}
            element={<HistoryLog />}
          />
        </Route>
        <Route path={NavigationRoutesEnum.usersPagePath} element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
