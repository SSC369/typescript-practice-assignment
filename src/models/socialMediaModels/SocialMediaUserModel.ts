import SocialMediaPostModel from "./SocialMediaPostModel";

interface ContactType {
  email: string;
  phone: string;
}

interface PersonalInfoType {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  contact: ContactType;
}

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

interface SettingsType {
  privacy: PrivacyType;
  notifications: NotificationsType;
}

interface ProfileType {
  personalInfo: PersonalInfoType;
  settings: SettingsType;
}

class SocialMediaUserModel {
  id: string;
  profile: ProfileType;
  posts: SocialMediaPostModel[];

  constructor(id: string, profile: ProfileType, posts: SocialMediaPostModel[]) {
    this.id = id;
    this.profile = profile;
    this.posts = posts;
  }
}

export default SocialMediaUserModel;
