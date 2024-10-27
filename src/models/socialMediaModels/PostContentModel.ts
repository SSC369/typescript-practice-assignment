import PostMediaModel from "./PostMediaModel";

class PostContentModel {
  text: string;
  media: PostMediaModel[];
  constructor(text: string, media: PostMediaModel[]) {
    this.text = text;
    this.media = media;
  }

  updatePostText(text: string) {
    this.text = text;
  }

  deletePostMedia(mediaIds: string[]) {
    const filteredMediaInstances = this.media.filter((data) => {
      if (!mediaIds.includes(data.id)) {
        return data;
      }
    });
    this.media = filteredMediaInstances;
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
