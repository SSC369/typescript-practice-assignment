import React from "react";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import RemarkModel from "../models/RemarkModel";
import dayjs from "dayjs";
import remarkStoreObject from "../store/RemarkStore";
import { ReactFunctionType, VoidFunctionType } from "../types";

interface RemarkItemProps {
  remark: RemarkModel;
  handleRemarkEdit: (remarkObject: RemarkModel) => void;
}

const RemarkItem: React.FC<RemarkItemProps> = ({
  remark,
  handleRemarkEdit,
}) => {
  const { remarkId, content, addedBy, createdAt } = remark;
  const { title, description } = content;

  const handleRemarkDelete: VoidFunctionType = () => {
    remarkStoreObject.removeRemark(remarkId);
  };

  const handleEdit: VoidFunctionType = () => {
    handleRemarkEdit(remark);
  };

  const renderButtons: ReactFunctionType = () => {
    return (
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={handleRemarkDelete}
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
  return (
    <li className="flex flex-col  bg-white rounded-xl p-2 w-1/4 relative">
      <p className=" text-xl first-letter:capitalize text-slate-800 font-medium truncate mb-2">
        {title}
      </p>
      <p className="text-slate-600 line-clamp-3 break-words text-sm">
        {description}
      </p>

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
    </li>
  );
};

export default RemarkItem;
