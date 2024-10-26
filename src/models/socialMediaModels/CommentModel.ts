class CommentModel {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  replies: string[];

  constructor(
    id: string,
    user: string,
    text: string,
    timestamp: string,
    replies: string[]
  ) {
    this.id = id;
    this.user = user;
    this.text = text;
    this.timestamp = timestamp;
    this.replies = replies;
  }
}

export default CommentModel;
