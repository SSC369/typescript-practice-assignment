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

  get PostEngagement() {
    return {
      likes: this.likes,
      comments: this.comments,
      shares: this.shares,
    };
  }

  updatePostEngagement(
    likes: number,
    shares: number,
    comments: CommentModel[]
  ) {
    this.likes = likes;
    this.shares = shares;
    this.comments = comments;
  }

  deleteComment(commentId: string) {
    this.comments = this.comments.filter((comment) => comment.id !== commentId);
  }

  addComment(comment: CommentModel) {
    this.comments.push(comment);
  }
}

export default PostEngagementModel;
