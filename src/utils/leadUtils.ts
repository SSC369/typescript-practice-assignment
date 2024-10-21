import { GetLogoType, GetTabType } from "../types";

const getLogo: GetLogoType = (name) => {
  const splitName = name.split(" ");
  if (splitName.length >= 2) {
    return splitName[0][0] + splitName[1][0];
  }
  return name[0];
};

const getTab: GetTabType = (data) => {
  const splitTab = data.split("-");
  const tabArray = splitTab.map((tab) => {
    return tab[0].toUpperCase() + tab.slice(1);
  });
  const tab = tabArray.join(" ");
  return tab;
};

export { getLogo, getTab };
