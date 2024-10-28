import PostContentModel from "./PostContentModel";
import PostEngagementModel from "./PostEngagementModel";
import PostsModel from "./PostModel";
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

  getUserData() {
    return {
      id: this.id,
      profile: this.profile,
      posts: this.posts,
    };
  }
  addPost(
    id: string,
    content: PostContentModel,
    engagement: PostEngagementModel
  ) {
    this.posts.push(new PostsModel(id, content, engagement));
  }

  deletePost(id: string) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  updateUser(profile: UserProfileModel, posts: PostsModel[]) {
    this.profile = profile;
    this.posts = posts;
  }
}

export default UserModel;
