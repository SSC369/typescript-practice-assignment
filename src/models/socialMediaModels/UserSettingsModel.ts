interface PrivacyType {
  profileVisibility: string;
  showEmail: boolean;
  showPhone: boolean;
}

interface NotificationsType {
  email: boolean;
  push: boolean;
  frequency: string;
}

class UserSettingsModel {
  privacy: PrivacyType;
  notifications: NotificationsType;

  constructor(privacy: PrivacyType, notifications: NotificationsType) {
    this.privacy = privacy;
    this.notifications = notifications;
  }

  updateUserSettings(privacy: PrivacyType, notifications: NotificationsType) {
    this.privacy = privacy;
    this.notifications = notifications;
  }
}

export default UserSettingsModel;
