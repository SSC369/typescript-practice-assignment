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

  updatePostEngagement(likes: number, shares: number, comment: CommentModel) {
    this.likes = likes;
    this.shares = shares;
    const { id, user, text, timestamp, replies } = comment;
    const commentInstance = this.comments.find((comment) => comment.id === id)!;
    commentInstance.updateComment(user, text, timestamp, replies);
  }

  deleteComment(commentId: string) {
    this.comments = this.comments.filter((comment) => comment.id !== commentId);
  }
}

export default PostEngagementModel;
