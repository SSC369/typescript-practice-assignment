import React from "react";
import { Toaster } from "react-hot-toast";
import { observer } from "mobx-react-lite";

import Header from "../components/Header";
import OverviewAssigneeSection from "./OverviewAssigneeSection";
import LeadViewSection from "./LeadViewSection";

const LeadPage: React.FC = observer(() => {
  return (
    <>
      <Header />
      <main className="flex justify-center px-[160px] bg-slate-100 min-h-dvh pt-[150px]">
        <OverviewAssigneeSection />
        <LeadViewSection />
        <Toaster position="top-center" reverseOrder={true} />
      </main>
    </>
  );
});

export default LeadPage;
