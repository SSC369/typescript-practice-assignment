import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { ReactFunctionType, VoidFunctionType } from "../types";
import toast from "react-hot-toast";
import RemarkModel from "../models/RemarkModel";

interface RemarkModalPropsTypes {
  close: VoidFunctionType;
  remarkObject: RemarkModel;
}
const EditRemarkModal: React.FC<RemarkModalPropsTypes> = ({
  close,
  remarkObject,
}) => {
  const [formData, setFormData] = useState({
    title: remarkObject.remarkContent.title,
    description: remarkObject.remarkContent.description,
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

  const handleRemarkUpdateSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const { title, description } = formData;
    if (validateRemarkFormData()) {
      const content = {
        title,
        description,
      };
      const response: { status: boolean; message: string } =
        remarkObject.updateRemark(content, new Date())!;
      if (response.status) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
      close();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderRemarkEditForm: ReactFunctionType = () => {
    return (
      <form onSubmit={handleRemarkUpdateSubmit} className="flex flex-col gap-4">
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
          Save
        </button>
      </form>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-60">
      <div className="flex relative flex-col justify-center rounded-xl  bg-slate-100 gap-4 px-4 py-6 w-1/3">
        <h1 className="text-center font-medium text-xl text-slate-800">
          Edit Remark
        </h1>

        <button onClick={handleModalClose} className="absolute top-4 right-10">
          <IoClose />
        </button>

        {renderRemarkEditForm()}
      </div>
    </div>
  );
};

export default EditRemarkModal;
