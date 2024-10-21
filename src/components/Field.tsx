import dayjs from "dayjs";
import React from "react";
import { FaPhoneAlt, GoDotFill } from "../Icons";

import { FIELD_DATE_FORMAT, FIELD_TYPES } from "../constants";
import FieldMultiSelect from "./FieldMultiSelect";

interface PhoneNumberValueType {
  phoneNumber: string;
  countryCode: string;
}

type FieldPhoneNumberType = (value: PhoneNumberValueType) => React.ReactNode;

interface FieldPropsType {
  value: any;
  fieldType: string;
}

type CheckboxTextType = (value: string[] | string) => React.ReactNode;
interface StatusColorType {
  status: string;
  color: string;
  bgColor?: string;
}
type StatusType = (value: StatusColorType) => React.ReactNode;

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

  const renderFieldValue = () => {
    switch (fieldType) {
      case FIELD_TYPES.DATE:
        return <p>{dayjs(new Date(value)).format(FIELD_DATE_FORMAT)}</p>;
      case FIELD_TYPES.CHECKBOX_GROUP:
        return renderCheckBoxText(value);
      case FIELD_TYPES.MULTI_SELECT:
        return <FieldMultiSelect value={value} />;
      case FIELD_TYPES.LONG_TEXT:
        return <p className=" max-w-[200px] text-wrap">{value}</p>;
      case FIELD_TYPES.PHONE_NUMBER:
        return renderFieldPhoneNumber(value);
      case FIELD_TYPES.URL:
        return <p className="font-medium text-sky break-words">{value}</p>;
      case FIELD_TYPES.STATUS:
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
