import {
  HeaderOptionsType,
  AssigneesShowLimitType,
  DateFormatType,
  FieldDateFormatType,
  MultiSelectLimitType,
  LeadViewPagePathType,
  UsersPagePathType,
  OverviewShowLimitType,
  HomeRouteType,
  LeadTabsEnum,
  LeadTabsNavigateEnum,
  FieldTypesEnum,
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

const LEAD_TABS: LeadTabsEnum[] = [
  LeadTabsEnum["lead-details"],
  LeadTabsEnum.activities,
  LeadTabsEnum["call-log"],
  LeadTabsEnum.documents,
  LeadTabsEnum.remarks,
  LeadTabsEnum["history-log"],
];

const LEAD_TABS_NAVIGATE: LeadTabsNavigateEnum[] = [
  LeadTabsNavigateEnum["lead-details"],
  LeadTabsNavigateEnum.activities,
  LeadTabsNavigateEnum["call-log"],
  LeadTabsNavigateEnum.documents,
  LeadTabsNavigateEnum.remarks,
  LeadTabsNavigateEnum["history-log"],
];

const FIELD_TYPES: FieldTypesEnum[] = [
  FieldTypesEnum.CHECKBOX_GROUP,
  FieldTypesEnum.DATE,
  FieldTypesEnum.MULTI_SELECT,
  FieldTypesEnum.PHONE_NUMBER,
  FieldTypesEnum.LONG_TEXT,
  FieldTypesEnum.STATUS,
  FieldTypesEnum.URL,
];

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
