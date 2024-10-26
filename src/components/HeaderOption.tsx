import React from "react";
import { IoIosCall, IoIosSend, FaRegFileLines } from "../Icons";
import { observer } from "mobx-react-lite";

import { HEADER_OPTIONS } from "../constants";
import whatsappIcon from "../assets/whatsapp.png";
import { showSuccessToast } from "../utils/toastUtils";
import {
  HeaderOptionPropsType,
  HeaderOptionType,
  VoidFunctionType,
} from "../types";

const HeaderOption: React.FC<HeaderOptionPropsType> = observer(({ option }) => {
  const renderIcon: (option: HeaderOptionType) => React.ReactNode = (
    option
  ) => {
    switch (option.name) {
      case HEADER_OPTIONS.call.name:
        return <IoIosCall className="text-xl" color={option.color} />;
      case HEADER_OPTIONS.remarks.name:
        return <FaRegFileLines className="text-lg" color={option.color} />;
      case HEADER_OPTIONS.send.name:
        return <IoIosSend className="text-xl" color={option.color} />;
      case HEADER_OPTIONS.whatsapp.name:
        return <img className="h-4" src={whatsappIcon} />;
      default:
        break;
    }
  };

  const handleClick: VoidFunctionType = () => {
    showSuccessToast("Yet to be added");
  };

  return (
    <li
      onClick={handleClick}
      style={{ backgroundColor: option.bgColor }}
      className="flex items-center gap-2 py-2  px-4 rounded-xl"
    >
      {renderIcon(option)}
      <p
        style={{ color: option.color }}
        className="first-letter:capitalize font-medium text-sm"
      >
        {option.name}
      </p>
    </li>
  );
});

export default HeaderOption;
