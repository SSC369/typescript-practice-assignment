import dayjs from "dayjs";
import React from "react";
import { FaPhoneAlt, GoDotFill } from "../Icons";

import FieldMultiSelect from "./FieldMultiSelect";
import {
  CheckboxTextType,
  DateFormatEnum,
  FieldPhoneNumberType,
  FieldPropsType,
  FieldTypesEnum,
  StatusType,
} from "../types";

const Field: React.FC<FieldPropsType> = ({ value, fieldType }) => {
  const renderFieldPhoneNumber: FieldPhoneNumberType = (value) => {
    const { phoneNumber, countryCode } = value;
    return (
      <div className="text-sky font-semibold flex items-center gap-2">
        <FaPhoneAlt />
        <p>
          {countryCode} {phoneNumber}
        </p>
      </div>
    );
  };

  const renderCheckBoxText: CheckboxTextType = (value) => {
    if (typeof value === "object") {
      const checkboxText = value.join(", ");
      return <p className="font-medium break-words">{checkboxText}</p>;
    }
    return <p className="font-medium">True</p>;
  };

  const renderStatus: StatusType = (value) => {
    const { status, color } = value;
    return (
      <div
        style={{ backgroundColor: value?.bgColor || "" }}
        className=" flex items-center gap-1 w-fit pl-2 pr-4 py-1 bg-sky rounded-2xl"
      >
        <GoDotFill color={color} className="text-xs" />
        <p
          style={{ color: value?.color || "" }}
          className="first-letter:capitalize text-xs"
        >
          {status}
        </p>
      </div>
    );
  };

  const renderMultiSelect: (value: string[]) => React.ReactNode = (value) => {
    return <FieldMultiSelect value={value} />;
  };

  const renderFieldValue: () => React.ReactNode = () => {
    switch (fieldType) {
      case FieldTypesEnum.DATE:
        return (
          <p>{dayjs(new Date(value)).format(DateFormatEnum.fieldDateFormat)}</p>
        );
      case FieldTypesEnum.CHECKBOX_GROUP:
        return renderCheckBoxText(value);
      case FieldTypesEnum.MULTI_SELECT:
        return renderMultiSelect(value);
      case FieldTypesEnum.LONG_TEXT:
        return <p className=" max-w-[200px] text-wrap">{value}</p>;
      case FieldTypesEnum.PHONE_NUMBER:
        return renderFieldPhoneNumber(value);
      case FieldTypesEnum.URL:
        return <p className="font-medium text-sky break-words">{value}</p>;
      case FieldTypesEnum.STATUS:
        return renderStatus(value);
      default:
        return <p className="font-medium break-words">{value}</p>;
    }
  };

  return (
    <div className="text-slate-700 text-xs break-words">
      {renderFieldValue()}
    </div>
  );
};

export default Field;
