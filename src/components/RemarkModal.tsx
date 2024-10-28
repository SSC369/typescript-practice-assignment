import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { v4 } from "uuid";
import toast from "react-hot-toast";

import {
  ReactFunctionType,
  RemarkFormData,
  RemarkModalPropsTypes,
  VoidFunctionType,
} from "../types";
import remarkStoreObject from "../store/RemarkStore";

const RemarkModal: React.FC<RemarkModalPropsTypes> = ({ close }) => {
  const [formData, setFormData] = useState<RemarkFormData>({
    title: "",
    description: "",
  });
  const handleModalClose: VoidFunctionType = () => {
    close();
  };

  const validateRemarkFormData: () => boolean = () => {
    const { title, description } = formData;
    if (title.trim() === "") {
      toast.error("Please enter title");
      return false;
    } else if (description.trim() === "") {
      toast.error("Please enter description");
      return false;
    }
    return true;
  };

  const handleRemarkSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const { title, description } = formData;
    if (validateRemarkFormData()) {
      const remarkId = v4();
      const addedBy = "ssc";
      const content = { title, description };
      const createdAt = new Date();
      remarkStoreObject.addRemark(remarkId, content, addedBy, createdAt);
      handleModalClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderAddRemarkForm: ReactFunctionType = () => {
    return (
      <form onSubmit={handleRemarkSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-slate-600">Title</label>
          <input
            onChange={handleInputChange}
            value={formData.title}
            className="p-3 rounded-xl outline-none"
            name="title"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-slate-600">Description</label>
          <textarea
            onChange={handleInputChange}
            name="description"
            value={formData.description}
            className="p-3 rounded-xl outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-sky text-sky p-2 rounded-xl self-center text-sm px-4 font-medium"
        >
          Submit
        </button>
      </form>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-60">
      <div className="flex relative flex-col justify-center rounded-xl  bg-slate-100 gap-4 px-4 py-6 w-1/3">
        <h1 className="text-center font-medium text-xl text-slate-800">
          Add Remark
        </h1>

        <button onClick={handleModalClose} className="absolute top-4 right-4">
          <IoClose />
        </button>

        {renderAddRemarkForm()}
      </div>
    </div>
  );
};

export default RemarkModal;
