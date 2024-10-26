import React from "react";
import LeadDataModel from "./models/LeadDataModel";
import GofModel from "./models/GofModel";
import FieldModel from "./models/FieldModel";

// Field Types Enum
export enum FieldTypesEnum {
  checkBoxGroup = "CHECKBOX_GROUP",
  date = "DATE",
  multiSelect = "MULTI_SELECT",
  phoneNumber = "PHONE_NUMBER",
  longText = "LONG_TEXT",
  url = "URL",
  status = "STATUS",
  number = "NUMBER",
  email = "EMAIL",
  smallText = "SMALL_TEXT",
  dropdown = "DOWNDOWN",
}

export enum ShowLimitEnum {
  assigneesShowLimit = 3,
  overviewFieldsShowLimit = 3,
  multiSelectShowLimit = 2,
}

export enum LeadTabsEnum {
  leadDetails = "lead-details",
  activities = "activities",
  remarks = "remarks",
  documents = "documents",
  callLog = "call-log",
  historyLog = "history-log",
}

export enum LeadTabsNavigateEnum {
  "lead-details" = "",
  activities = "activities",
  remarks = "remarks",
  documents = "documents",
  "call-log" = "call-log",
  "history-log" = "history-log",
}

export enum DateFormatEnum {
  dateFormat = "DD MMM YYYY, HH:MM A",
  fieldDateFormat = "DD MMM YYYY",
}

export enum NavigationRoutesEnum {
  homePagePath = "/",
  leadViewPagePath = "/lead-view",
  usersPagePath = "/",
}

interface HeaderOptionType {
  name: string;
  bgColor: string;
  color: string;
}

interface HeaderOptionsType {
  call: HeaderOptionType;
  whatsapp: HeaderOptionType;
  remarks: HeaderOptionType;
  send: HeaderOptionType;
}

//toasts
type ToastFunctionType = (text: string) => void;
type GetLogoType = (name: string) => string;
type GetTabType = GetLogoType;
interface LoaderTypes {
  height?: number;
  width?: number;
}

interface StageType {
  name: string;
  color: string;
  bgColor: string;
}

type FieldValueType =
  | string
  | string[]
  | { countryCode: string; phoneNumber: string }
  | number
  | { color: string; status: string; bgColor: string }
  | boolean;

interface FieldPropsType {
  value: any;
  fieldType: FieldTypesEnum;
}

interface PhoneNumberValueType {
  phoneNumber: string;
  countryCode: string;
}

interface StatusColorType {
  status: string;
  color: string;
  bgColor?: string;
}

type FieldPhoneNumberType = (value: PhoneNumberValueType) => React.ReactNode;

type CheckboxTextType = (value: string[] | string) => React.ReactNode;

type StatusType = (value: StatusColorType) => React.ReactNode;

interface HeaderData {
  leadId: string;
  name: string;
  stage: StageType;
}

interface UserContextType {
  headerData: HeaderData;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  userData: LeadDataModel;
  fetchData: () => Promise<void>;
}

// Define the provider props (with children)
interface UserContextProviderProps {
  children: React.ReactNode;
}
type ReactFunctionType = () => React.ReactElement;

// Component types
interface FieldMultiSelectPropsType {
  value: string[];
}
interface GofPropsType {
  field: FieldModel;
}

interface HeaderOptionPropsType {
  option: HeaderOptionType;
}

interface LeadDetailsFieldPropsType {
  gof: GofModel;
}

interface UserType {
  leadId: string;
  name: string;
  stage: {
    name: string;
    color: string;
    bgColor: string;
  };
}

type VoidFunctionType = () => void;

export type {
  HeaderOptionPropsType,
  VoidFunctionType,
  LeadDetailsFieldPropsType,
  FieldMultiSelectPropsType,
  GofPropsType,
  StageType,
  HeaderOptionType,
  HeaderOptionsType,
  ToastFunctionType,
  GetTabType,
  GetLogoType,
  LoaderTypes,
  PhoneNumberValueType,
  FieldPropsType,
  StatusColorType,
  FieldPhoneNumberType,
  CheckboxTextType,
  StatusType,
  UserContextType,
  UserContextProviderProps,
  HeaderData,
  ReactFunctionType,
  FieldValueType,
  UserType,
};
