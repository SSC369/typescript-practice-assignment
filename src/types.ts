import React from "react";

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

type AssigneesShowLimitType = number;
type OverviewShowLimitType = number;
type HomeRouteType = string;

interface LeadTabsType {
  "lead-details": string;
  activities: string;
  remarks: string;
  documents: string;
  "call-log": string;
  "history-log": string;
}

interface LeadTabsNavigateType extends LeadTabsType {}

interface FieldTypesType {
  CHECKBOX_GROUP: string;
  DATE: string;
  MULTI_SELECT: string;
  PHONE_NUMBER: string;
  LONG_TEXT: string;
  URL: string;
  STATUS: string;
}
type DateFormatType = string;
type FieldDateFormatType = string;

type MultiSelectLimitType = number;
type LeadViewPagePathType = string;
type UsersPagePathType = string;

//toasts
type ToastFunctionType = (text: string) => void;
type GetLogoType = (name: string) => string;
type GetTabType = GetLogoType & {}; // Extending a type via intersections

interface LoaderTypes {
  height?: number;
  width?: number;
}

interface UserContextProviderType {}

interface StageType {
  name: string;
  color: string;
  bgColor: string;
}

interface AssigneeType {
  id: string;
  name: string;
  profilePic: string;
  lastUpdated: string;
}

interface OverviewFieldsType {
  fieldId: number;
  name: string;
  value: string | string[] | { countryCode: string; phoneNumber: string };
  fieldType: string;
}

interface GofFieldType {
  fieldId: number;
  name: string;
  value: string | string[] | { countryCode: string; phoneNumber: string };
  fieldType: string;
}

interface GofsType {
  id: string;
  name: string;
  fields: GofFieldType[];
}

interface UsersLeadDataType {
  leadId: string;
  name: string;
  stage: StageType;
  assignees: AssigneeType[];
  overviewFields: OverviewFieldsType[];
  gofs: GofsType[];
}

export type {
  StageType,
  HeaderOptionType,
  HeaderOptionsType,
  AssigneesShowLimitType,
  LeadTabsNavigateType,
  LeadTabsType,
  DateFormatType,
  FieldDateFormatType,
  MultiSelectLimitType,
  LeadViewPagePathType,
  UsersPagePathType,
  FieldTypesType,
  OverviewShowLimitType,
  HomeRouteType,
  ToastFunctionType,
  GetTabType,
  GetLogoType,
  LoaderTypes,
  UserContextProviderType,
  UsersLeadDataType,
  OverviewFieldsType,
  GofsType,
  GofFieldType,
};
