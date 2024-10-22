import {
  HeaderOptionsType,
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

export { HEADER_OPTIONS, LEAD_TABS, FIELD_TYPES, LEAD_TABS_NAVIGATE };
