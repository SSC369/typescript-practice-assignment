import PostMediaModel from "./PostMediaModel";

class PostContentModel {
  text: string;
  media: PostMediaModel[];
  constructor(text: string, media: PostMediaModel[]) {
    this.text = text;
    this.media = media;
  }

  updatePostContent(text: string, media: PostMediaModel[]) {
    this.text = text;
    this.media = media;
  }

  deletePostMedia(id: string) {
    this.media = this.media.filter((data) => data.id !== id);
  }

  addPostMedia(mediadata: PostMediaModel[]) {
    mediadata.forEach((media) => {
      const { id, type, url, metadata } = media;
      this.media.push(new PostMediaModel(id, type, url, metadata));
    });
  }

  get postContent() {
    return {
      text: this.text,
      media: this.media,
    };
  }
}

export default PostContentModel;
