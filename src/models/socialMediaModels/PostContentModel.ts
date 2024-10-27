import PostModel from "./PostModel";

class PostContentModel {
  text: string;
  media: PostModel[];
  constructor(text: string, media: PostModel[]) {
    this.text = text;
    this.media = media;
  }
}

export default PostContentModel;
