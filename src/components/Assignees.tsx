import React, { useContext, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

import { UserContext } from "../context/userContext";
import { showSuccessToast } from "../utils/toastUtils";
import { ReactFunctionType, ShowLimitEnum } from "../types";
import { observer } from "mobx-react-lite";
import AssigneeModel from "../models/AssigneeModel";

const Assignees: React.FC = observer(() => {
  const [showLimit, setShowLimit] = useState<number>(
    ShowLimitEnum.assigneesShowLimit
  );
  const contextUserData = useContext(UserContext)!.userData;
  const assigneesMap: Map<string, AssigneeModel> = contextUserData?.assignees;

  const assignees = Array.from(assigneesMap.keys());

  let assigneesLimitData: string[];
  if (assigneesMap.size > showLimit) {
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
        key={id}
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
          const { id, name } = assigneesMap.get(a)!;
          return renderAssignee(id, name);
        })}
      </ul>
    );
  };

  const handleClickSeeMore: () => void = () => {
    if (showLimit === assigneesMap.size) {
      setShowLimit(ShowLimitEnum.assigneesShowLimit);
    } else {
      setShowLimit(assigneesMap.size);
    }
  };

  const renderSeeMoreButtonText: () => string = () => {
    if (showLimit < assigneesMap.size) {
      return "See More";
    }
    return "See Less";
  };

  const renderSeeMoreButton: () => React.ReactNode = () => {
    if (assigneesMap.size === ShowLimitEnum.assigneesShowLimit) {
      return <></>;
    }
    if (showLimit < assigneesMap.size) {
      return (
        <button
          onClick={handleClickSeeMore}
          className="flex items-center gap-1 text-xs self-center"
        >
          <p className="text-sky font-semibold">{renderSeeMoreButtonText()}</p>
          <FaChevronDown
            className={`transition-transform duration-300 ease-in-out ${
              showLimit < assigneesMap.size ? "rotate-0" : "rotate-180"
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
});

export default Assignees;
