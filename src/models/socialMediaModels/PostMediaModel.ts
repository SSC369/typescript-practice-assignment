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

  replacePostMediaData(
    type: string,
    url: string,
    metadata: PostMediaMetaDataModel
  ) {
    this.type = type;
    this.url = url;
    const { size, dimensions } = metadata;
    this.metadata.updateMetaData(size, dimensions);
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
