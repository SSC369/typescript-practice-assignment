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

  deletePost(id: string) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}

export default UserModel;
