import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiRefreshCw,
  FaChevronDown,
  FaRocket,
  IoClose,
  RxLink2,
} from "../Icons";
import { LuMoveLeft } from "react-icons/lu";
import { v4 } from "uuid";

import { UserContext } from "../context/userContext";
import { HEADER_OPTIONS } from "../constants";
import { showSuccessToast } from "../utils/toastUtils";
import HeaderOption from "./HeaderOption";
import { getLogo } from "../utils/leadUtils";
import {
  HeaderOptionsType,
  NavigationRoutesEnum,
  ReactFunctionType,
  StageType,
} from "../types";

const Header: React.FC = () => {
  const contextHeaderData = useContext(UserContext)!.headerData;
  const contextFetchData = useContext(UserContext)!.fetchData;
  const navigate = useNavigate();
  const { name, stage } = contextHeaderData;
  const logo: string = getLogo(name);
  const options: string[] = Object.keys(HEADER_OPTIONS);

  const handleRefresh: () => void = () => {
    contextFetchData();
  };

  const renderHeaderOptions: ReactFunctionType = () => {
    return (
      <ul className="flex items-center justify-between mt-2 gap-3">
        {options.map((option) => {
          const optionData = HEADER_OPTIONS[option as keyof HeaderOptionsType];
          return <HeaderOption key={v4()} option={optionData} />;
        })}
      </ul>
    );
  };

  const renderProfile: (stage: StageType) => React.ReactNode = (stage) => {
    return (
      <div className="flex items-center">
        <div className="rounded-full p-4 font-semibold bg-sky text-2xl text-sky">
          {logo}
        </div>
        <h1 className="font-semibold text-2xl ml-4 mr-6">{name}</h1>
        <div
          className="flex items-center gap-1 rounded-2xl px-2 text-white py-2 pl-2 pr-[6px]"
          style={{ backgroundColor: stage.bgColor }}
        >
          <p style={{ color: stage.color }} className="text-xs font-medium">
            {stage.name}
          </p>
          <FaChevronDown
            style={{ color: stage.color }}
            className="text-xs ml-1"
          />
        </div>
      </div>
    );
  };

  const handleClose: () => void = () => {
    showSuccessToast("Yet to be added");
  };

  const handleClickCopyLink: () => void = () => {
    showSuccessToast("Yet to be added");
  };

  const renderHeader: ReactFunctionType = () => {
    return (
      <div className="flex items-center w-full justify-between mb-4">
        <div className="flex items-center gap-3">
          <FaRocket color="#0086C9" className=" text-xl" />
          <p className="flex-grow-1 text-sm font-medium">Academy CGA</p>
        </div>

        <div className="flex items-center gap-5 text-xl absolute right-6 top-4">
          <button onClick={handleRefresh}>
            <FiRefreshCw />
          </button>

          <button onClick={handleClose}>
            <IoClose />
          </button>
        </div>
      </div>
    );
  };

  const handleNavigateBack: () => void = () => {
    // add a seperate interface
    navigate(NavigationRoutesEnum.usersPagePath);
  };

  return (
    <header className="fixed w-full bg-white z-50 px-40 py-6 border-b-[1px]">
      {renderHeader()}
      <div className="mt-3 flex items-center justify-between">
        {renderProfile(stage)}

        <div className="flex flex-col">
          <button
            onClick={handleClickCopyLink}
            className="text-sky flex items-center gap-2 self-end"
          >
            <RxLink2 className="text-xl" />
            <p className="font-semibold text-sm">Copy Link</p>
          </button>
          {renderHeaderOptions()}
        </div>
      </div>

      <button
        onClick={handleNavigateBack}
        className="absolute left-6 top-4 flex gap-2 items-center text-sky"
      >
        <LuMoveLeft className="text-lg" />
        <p className="text-xs font-medium">Go Back</p>
      </button>
    </header>
  );
};

export default Header;
