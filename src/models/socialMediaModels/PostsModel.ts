import PostContentModel from "./PostContentModel";
import PostEngagementModel from "./PostEngagementModel";

class PostsModel {
  id: string;
  content: PostContentModel;
  engagement: PostEngagementModel;

  constructor(
    id: string,
    content: PostContentModel,
    engagement: PostEngagementModel
  ) {
    this.id = id;
    this.content = content;
    this.engagement = engagement;
  }
}

export default PostsModel;
