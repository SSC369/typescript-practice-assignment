import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import RemarkModal from "../components/RemarkModal";
import remarkStoreObject from "../store/RemarkStore";
import RemarkItem from "../components/RemarkItem";
import EditRemarkModal from "../components/EditRemarkModal";
import RemarkModel from "../models/RemarkModel";

export interface RemarkContentType {
  title: string;
  description: string;
  remarkId: string;
}

const Remarks: React.FC = observer(() => {
  const [showAddRemarkModal, setShowRemarkModal] = useState<boolean>(false);
  const [showEditRemarkModal, setShowEditRemarkModal] =
    useState<boolean>(false);
  const [editRemarkContent, setEditRemarkContent] =
    useState<RemarkModel | null>(null);

  const remarks = remarkStoreObject.getRemarks();

  const handleRemarkEdit: (remarkObject: RemarkModel) => void = (
    remarkObject
  ) => {
    setEditRemarkContent(remarkObject);
    setShowEditRemarkModal(true);
  };

  const renderRemarks = () => {
    return (
      <ul className="mt-4 flex  items-center gap-4 flex-wrap">
        {remarks.map((remark) => {
          return (
            <RemarkItem
              handleRemarkEdit={handleRemarkEdit}
              key={remark.remarkId}
              remark={remark}
            />
          );
        })}
      </ul>
    );
  };

  const renderEditRemarkModal: () => React.ReactNode = () => {
    if (showEditRemarkModal && editRemarkContent) {
      return (
        <EditRemarkModal
          close={() => setShowEditRemarkModal(false)}
          remarkObject={editRemarkContent}
        />
      );
    }
    return <></>;
  };

  const renderAddRemarkModal: () => React.ReactNode = () => {
    if (showAddRemarkModal) {
      return <RemarkModal close={() => setShowRemarkModal(false)} />;
    }
    return <></>;
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 mt-2">
        <h1 className="text-lg text-slate-600 font-semibold">Remarks</h1>
        <hr className="text-slate-600 flex-grow h-2 mt-2" />
      </div>
      <button
        onClick={() => setShowRemarkModal(true)}
        className={`bg-sky text-sky p-2 rounded-xl  text-sm px-4 font-medium ${
          remarks.length > 0 ? "mt-0 self-end" : "self-center mt-40"
        }`}
      >
        Add Remark
      </button>
      {renderRemarks()}
      {renderAddRemarkModal()}
      {renderEditRemarkModal()}
    </div>
  );
});

export default Remarks;
