import PostMediaMetaDataModel from "./PostMediaMetaDataModel";

class PostModel {
  type: string;
  url: string;
  metadata: PostMediaMetaDataModel;

  constructor(type: string, url: string, metadata: PostMediaMetaDataModel) {
    this.type = type;
    this.url = url;
    this.metadata = metadata;
  }
}

export default PostModel;
