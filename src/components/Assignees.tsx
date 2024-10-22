import React, { useContext, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { v4 } from "uuid";

import { UserContext } from "../context/userContext";
import { showSuccessToast } from "../utils/toastUtils";
import { ReactFunctionType, ShowLimitEnum } from "../types";

const Assignees: React.FC = () => {
  const [showLimit, setShowLimit] = useState(ShowLimitEnum.assigneesShowLimit);
  const contextUserData = useContext(UserContext)!.userData;
  const assignees = contextUserData?.assignees;

  let assigneesLimitData;
  if (assignees.length > showLimit) {
    assigneesLimitData = assignees.slice(0, showLimit);
  } else {
    assigneesLimitData = assignees;
  }

  const renderAssignee: (id: string, name: string) => React.ReactNode = (
    id,
    name
  ) => {
    return (
      <li
        className="flex items-center text-xs border-b-[1px] last:border-none py-2"
        key={v4()}
      >
        <p className="flex-grow font-medium text-slate-600">{id}</p>
        <p className="font-medium text-slate-800">{name}</p>
        <div className="bg-slate-100 w-fit p-1 rounded-full ml-2">
          <FiUser className="text-xl" />
        </div>
      </li>
    );
  };

  const renderAssignees: ReactFunctionType = () => {
    return (
      <ul className="flex flex-col gap-2">
        {assigneesLimitData.map((a) => {
          const { id, name } = a;
          return renderAssignee(id, name);
        })}
      </ul>
    );
  };

  const handleClickSeeMore: () => void = () => {
    if (showLimit === assignees.length) {
      setShowLimit(ShowLimitEnum.assigneesShowLimit);
    } else {
      setShowLimit(assignees.length);
    }
  };

  const renderSeeMoreButtonText: () => string = () => {
    if (showLimit < assignees.length) {
      return "See More";
    }
    return "See Less";
  };

  const renderSeeMoreButton: () => React.ReactNode = () => {
    if (assignees.length === ShowLimitEnum.assigneesShowLimit) {
      return <></>;
    }
    if (showLimit < assignees.length) {
      return (
        <button
          onClick={handleClickSeeMore}
          className="flex items-center gap-1 text-xs self-center"
        >
          <p className="text-sky font-semibold">{renderSeeMoreButtonText()}</p>
          <FaChevronDown
            className={`transition-transform duration-300 ease-in-out ${
              showLimit < assignees.length ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      );
    }
  };

  const handleAssigneesEdit: () => void = () => {
    showSuccessToast("Yet to be added");
  };

  const renderAssigneesHeader: () => React.ReactNode = () => {
    return (
      <div className="flex  items-center justify-between text-slate-600">
        <h1 className="text-sm font-medium">Assignees</h1>
        <button
          onClick={handleAssigneesEdit}
          className="flex items-center gap-1 text-sky"
        >
          <MdOutlineEdit />
          <p className="text-xs font-medium">Edit</p>
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl text-slate-600 transition-all duration-300 ease-in-out">
      {renderAssigneesHeader()}
      {renderAssignees()}
      {renderSeeMoreButton()}
    </div>
  );
};

export default Assignees;
