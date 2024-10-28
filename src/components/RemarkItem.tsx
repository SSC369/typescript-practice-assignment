import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import dayjs from "dayjs";

import remarkStoreObject from "../store/RemarkStore";
import { ReactFunctionType, RemarkItemProps, VoidFunctionType } from "../types";

import ConfirmModal from "./ConfirmModal";

const RemarkItem: React.FC<RemarkItemProps> = ({
  remark,
  handleRemarkEdit,
}) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const { remarkId, content, addedBy, createdAt } = remark;
  const { title, description } = content;

  const handleRemarkDelete: VoidFunctionType = () => {
    remarkStoreObject.removeRemark(remarkId);
  };

  const handleEdit: VoidFunctionType = () => {
    handleRemarkEdit(remark);
  };

  const handleClickSeeMore: VoidFunctionType = () => {
    setShowContent(true);
  };

  const renderShowContent: ReactFunctionType = () => {
    if (showContent) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl max-h-[200px] w-[400px] break-words p-4 relative overflow-y-auto custom-scrollbar">
            <p className="pt-4 pr-4">{description}</p>
            <button
              onClick={() => setShowContent(false)}
              className="absolute top-2 right-2"
            >
              <IoClose className="text-xl" />
            </button>
          </div>
        </div>
      );
    }
    return <></>;
  };

  const renderButtons: ReactFunctionType = () => {
    return (
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => setShowConfirmModal(true)}
          className="bg-red-100 rounded-full h-8 w-8 flex items-center justify-center"
        >
          <MdDelete className="text-red-500 text-lg" />
        </button>
        <button
          onClick={handleEdit}
          className="bg-sky rounded-full h-8 w-8 flex items-center justify-center"
        >
          <TbEdit className="text-sky" />
        </button>
      </div>
    );
  };

  const renderConfirmModal: ReactFunctionType = () => {
    if (showConfirmModal) {
      return (
        <ConfirmModal
          onClose={() => setShowConfirmModal(false)}
          actionHandler={handleRemarkDelete}
        />
      );
    }
    return <></>;
  };

  const renderSeeMore: ReactFunctionType = () => {
    if (description.length > 30) {
      return (
        <button
          onClick={handleClickSeeMore}
          className="text-[10px] self-end text-sky font-medium"
        >
          See more
        </button>
      );
    }
    return <></>;
  };

  return (
    <li className="flex flex-col  bg-white rounded-xl p-2 w-1/4 relative">
      <p className=" text-xl first-letter:capitalize text-slate-800 font-medium truncate mb-2">
        {title}
      </p>

      <p className="text-slate-600 line-clamp-3 break-words text-sm">
        {description}
      </p>
      {renderSeeMore()}

      <p className="text-xs text-slate-600 mt-4 truncate">
        Created by <span className="text-sm font-medium">{addedBy}</span>
      </p>
      <p className="text-xs text-slate-600">
        Created on{" "}
        <span className="font-medium">
          {dayjs(createdAt).format("DD MMM YYYY")}
        </span>
      </p>
      {renderButtons()}
      {renderShowContent()}
      {renderConfirmModal()}
    </li>
  );
};

export default RemarkItem;
