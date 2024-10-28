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

  get comment() {
    const comment = {
      id: this.id,
      user: this.user,
      text: this.text,
      timestamp: this.timestamp,
      replies: this.replies,
    };
    return comment;
  }

  addReply(reply: string) {
    this.replies.push(reply);
  }

  updateComment(
    user: string,
    text: string,
    timestamp: string,
    replies: string[]
  ) {
    this.user = user;
    this.text = text;
    this.timestamp = timestamp;
    this.replies = replies;
  }
}

export default CommentModel;
