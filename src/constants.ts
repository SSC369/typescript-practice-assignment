import {
  HeaderOptionsType,
  LeadTabsNavigateType,
  LeadTabsType,
  AssigneesShowLimitType,
  DateFormatType,
  FieldDateFormatType,
  MultiSelectLimitType,
  LeadViewPagePathType,
  UsersPagePathType,
  FieldTypesType,
  OverviewShowLimitType,
  HomeRouteType,
} from "./types";

const HEADER_OPTIONS: HeaderOptionsType = {
  call: { name: "call", bgColor: "#EFF8FF", color: "#1570EF" },
  whatsapp: { name: "whatsapp", bgColor: "#ECFDF3", color: "#039855" },
  remarks: { name: "remarks", bgColor: "#EFF8FF", color: "#1570EF" },
  send: { name: "send", bgColor: "#EFF8FF", color: "#1570EF" },
};

const ASSIGNEES_SHOW_LIMIT: AssigneesShowLimitType = 3;
const OVERVIEW_SHOW_LIMIT: OverviewShowLimitType = 3;

const HOME_ROUTE: HomeRouteType = "/";
const LEAD_VIEW_PAGE_PATH: LeadViewPagePathType = "/lead-view";
const USERS_PAGE_PATH: UsersPagePathType = "/users";

const LEAD_TABS: LeadTabsType = {
  "lead-details": "lead-details",
  activities: "activities",
  remarks: "remarks",
  documents: "documents",
  "call-log": "call-log",
  "history-log": "history-log",
};

const LEAD_TABS_NAVIGATE: LeadTabsNavigateType = {
  "lead-details": "",
  activities: "activities",
  remarks: "remarks",
  documents: "documents",
  "call-log": "call-log",
  "history-log": "history-log",
};

const FIELD_TYPES: FieldTypesType = {
  CHECKBOX_GROUP: "CHECKBOX_GROUP",
  DATE: "DATE",
  MULTI_SELECT: "MULTI_SELECT",
  PHONE_NUMBER: "PHONE_NUMBER",
  LONG_TEXT: "LONG_TEXT",
  URL: "URL",
  STATUS: "STATUS",
};
const DATE_FORMAT: DateFormatType = "DD MMM YYYY, HH:MM A";
const FIELD_DATE_FORMAT: FieldDateFormatType = "DD MMM YYYY";
const MULTI_SELECT_LIMIT: MultiSelectLimitType = 2;

export {
  HEADER_OPTIONS,
  ASSIGNEES_SHOW_LIMIT,
  OVERVIEW_SHOW_LIMIT,
  LEAD_TABS,
  FIELD_TYPES,
  DATE_FORMAT,
  FIELD_DATE_FORMAT,
  HOME_ROUTE,
  LEAD_TABS_NAVIGATE,
  MULTI_SELECT_LIMIT,
  LEAD_VIEW_PAGE_PATH,
  USERS_PAGE_PATH,
};
