import PostContentModel from "./PostContentModel";
import PostEngagementModel from "./PostEngagementModel";

class PostModel {
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

  updatePost(content: PostContentModel, engagement: PostEngagementModel) {
    this.content = content;
    this.engagement = engagement;
  }
}

export default PostModel;
