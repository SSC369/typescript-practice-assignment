import UserPersonalInfoModel from "./UserPersonalInfoModel";
import UserSettingsModel from "./UserSettingsModel";

class UserProfileModel {
  personalInfo: UserPersonalInfoModel;
  settings: UserSettingsModel;

  constructor(
    personalInfo: UserPersonalInfoModel,
    settings: UserSettingsModel
  ) {
    this.personalInfo = personalInfo;
    this.settings = settings;
  }
}

export default UserProfileModel;
