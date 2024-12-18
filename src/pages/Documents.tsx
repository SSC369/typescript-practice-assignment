import { observer } from "mobx-react-lite";
import React from "react";

const Documents: React.FC = observer(() => {
  return (
    <div className="">
      <div className="flex items-center gap-4 mt-2">
        <h1 className="text-lg text-slate-600 font-semibold">Documents</h1>
        <hr className="text-slate-600 flex-grow h-2 mt-2" />
      </div>

      <h1 className="text-3xl text-center font-semibold text-slate-600 mt-20">
        Coming soon
      </h1>
    </div>
  );
});

export default Documents;
