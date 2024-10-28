import React, { useEffect, useState } from "react";
import { IoClose, IoWarningOutline } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import {
  ConfirmModalProps,
  ReactFunctionType,
  VoidFunctionType,
} from "../types";

const ConfirmModal: React.FC<ConfirmModalProps> = observer(
  ({ onClose, actionHandler }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
      setIsVisible(true); // Trigger the animation when modal is mounted
    }, []);

    const renderActionHeading: () => React.ReactNode = () => {
      return (
        <>
          <p className="font-semibold text-lg ">
            Are you sure you want to delete?
          </p>
          <p className="text-slate-500 text-xs mt-1">
            This remark will be deleted immediately. You can’t undo this action.
          </p>
        </>
      );
    };

    const handleCloseModal: VoidFunctionType = () => {
      setIsVisible(false);
      setTimeout(() => {
        onClose(); // Close the modal after the animation
      }, 300); // Match the animation duration
    };

    const renderModalButtons: ReactFunctionType = () => {
      return (
        <div className="flex items-center gap-4 mt-4 text-sm">
          <button
            onClick={actionHandler}
            className="bg-red-600 hover:bg-red-500 text-white rounded-xl py-2 px-4 flex items-center justify-center"
          >
            <p className="text-sm">Yes, Delete</p>
          </button>
          <button
            onClick={handleCloseModal}
            className="border-slate-200   border-2 px-4 py-2 text-black rounded-xl"
          >
            No, Leave it
          </button>
        </div>
      );
    };

    const RenderModalIcon: ReactFunctionType = () => {
      return (
        <div className="bg-orange-100 h-[48px] w-[54px] rounded-full flex justify-center items-center">
          <div className="bg-orange-200 h-[36px] w-[36px] rounded-full flex justify-center items-center">
            <IoWarningOutline className="text-orange-600 text-2xl" />
          </div>
        </div>
      );
    };

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-60 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`relative flex  flex-col justify-center rounded-xl  bg-white px-4 py-6 transform transition-transform duration-300 ${
            isVisible ? "scale-100" : "scale-90"
          }`}
        >
          <button onClick={handleCloseModal} className="absolute right-6 top-4">
            <IoClose className="text-xl text-slate-600" />
          </button>

          <div className="flex items-start gap-4">
            {RenderModalIcon()}

            <div className="flex flex-col mt-[-4px] pr-[40px]">
              <div className="max-w-[300px]">{renderActionHeading()}</div>
              {renderModalButtons()}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ConfirmModal;
