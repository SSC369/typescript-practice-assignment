import CommentModel from "./CommentModel";
import PostContentModel from "./PostContentModel";
import PostEngagementModel from "./PostEngagementModel";
import PostMediaMetaDataModel from "./PostMediaMetaDataModel";
import PostMediaModel from "./PostMediaModel";
import PostModel from "./PostModel";
import UserModel from "./UserModel";
import UserPersonalInfoModel from "./UserPersonalInfoModel";
import UserProfileModel from "./UserProfileModel";
import UserSettingsModel from "./UserSettingsModel";

class UsersModel {
  user: UserModel;

  constructor(user: UserModel) {
    this.user = user;
  }

  updateUser(user: UserModel) {
    const { profile, posts } = user;
    user.updateUser(profile, posts);
  }

  getPostContent(content: PostContentModel): PostContentModel {
    const { text, media } = content;
    const postMediaInstances = media.map((data) => {
      const { id, type, url, metadata } = data;
      const { size, dimensions } = metadata;
      const metadataInstance = new PostMediaMetaDataModel(size, dimensions);
      const postMediaInstance = new PostMediaModel(
        id,
        type,
        url,
        metadataInstance
      );
      return postMediaInstance;
    });
    return new PostContentModel(text, postMediaInstances);
  }

  getPostEngagement(engagement: PostEngagementModel): PostEngagementModel {
    const { likes, comments, shares } = engagement;
    const commentInstances = comments.map((comment) => {
      const { id, user, text, timestamp, replies } = comment;
      return new CommentModel(id, user, text, timestamp, replies);
    });
    return new PostEngagementModel(likes, commentInstances, shares);
  }

  getPostsInstances(posts: PostModel[]): PostModel[] {
    const postsInstances = posts.map((post) => {
      const { id, content, engagement } = post;
      const postContentInstance = this.getPostContent(content);
      const engagementInstance = this.getPostEngagement(engagement);
      const postInstance = new PostModel(
        id,
        postContentInstance,
        engagementInstance
      );
      return postInstance;
    });

    return postsInstances;
  }

  getUserProfile(profile: UserProfileModel): UserProfileModel {
    const { personalInfo, settings } = profile;
    const { firstName, lastName, dateOfBirth, contact } = personalInfo;
    const userPersonalInfoInstance = new UserPersonalInfoModel(
      firstName,
      lastName,
      dateOfBirth,
      contact
    );
    const { privacy, notifications } = settings;
    const userSettingsInstance = new UserSettingsModel(privacy, notifications);
    return new UserProfileModel(userPersonalInfoInstance, userSettingsInstance);
  }

  addUser(userData: UserModel) {
    const { id, profile, posts } = userData;
    const userProfileInstance = this.getUserProfile(profile);
    const postsInstances = this.getPostsInstances(posts);
    const userInstance = new UserModel(id, userProfileInstance, postsInstances);
    this.user = userInstance;
  }
}

export default UsersModel;
