import PostMediaMetaDataModel from "./PostMediaMetaDataModel";

class PostMediaModel {
  id: string;
  type: string;
  url: string;
  metadata: PostMediaMetaDataModel;

  constructor(
    id: string,
    type: string,
    url: string,
    metadata: PostMediaMetaDataModel
  ) {
    this.id = id;
    this.type = type;
    this.url = url;
    this.metadata = metadata;
  }

  updatePostMediaData(
    type: string,
    url: string,
    metadata: PostMediaMetaDataModel
  ) {
    this.type = type;
    this.url = url;
    this.metadata = metadata;
  }

  get postMedia() {
    return {
      type: this.type,
      url: this.url,
      metadata: this.metadata,
    };
  }
}

export default PostMediaModel;
