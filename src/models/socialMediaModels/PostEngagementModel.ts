import CommentModel from "./CommentModel";

class PostEngagementModel {
  likes: number;
  comments: CommentModel[];
  shares: number;

  constructor(likes: number, comments: CommentModel[], shares: number) {
    this.likes = likes;
    this.comments = comments;
    this.shares = shares;
  }
}

export default PostEngagementModel;
