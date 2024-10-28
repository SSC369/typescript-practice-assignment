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

  updateUserProfile(
    personalInfo: UserPersonalInfoModel,
    settings: UserSettingsModel
  ) {
    const { firstName, lastName, dateOfBirth, contact } = personalInfo;
    personalInfo.updatePersonalInfo(firstName, lastName, dateOfBirth, contact);
    const { privacy, notifications } = settings;
    settings.updateUserSettings(privacy, notifications);
  }
}

export default UserProfileModel;
