import React from "react";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";

import LeadTabs from "../components/LeadTabs";

const LeadViewSection: React.FC = observer(() => {
  return (
    <section className="relative p-6 w-2/3">
      <LeadTabs />
      <Outlet />
    </section>
  );
});

export default LeadViewSection;
