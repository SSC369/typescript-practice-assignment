import CommentModel from "./CommentModel";
import PostMediaModel from "./PostMediaModel";

interface ContentType {
  text: string;
  media: PostMediaModel[];
}

interface EngagementType {
  likes: number;
  comments: CommentModel[];
  shares: number;
}

class SocialMediaPostModel {
  id: string;
  content: ContentType;
  engagement: EngagementType;

  constructor(id: string, content: ContentType, engagement: EngagementType) {
    this.id = id;
    this.content = content;
    this.engagement = engagement;
  }
}

export default SocialMediaPostModel;
