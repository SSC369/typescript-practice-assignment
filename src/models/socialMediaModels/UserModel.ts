import PostsModel from "./PostsModel";
import UserProfileModel from "./UserProfileModel";

class UserModel {
  id: string;
  profile: UserProfileModel;
  posts: PostsModel[];

  constructor(id: string, profile: UserProfileModel, posts: PostsModel[]) {
    this.id = id;
    this.profile = profile;
    this.posts = posts;
  }
}

export default UserModel;
