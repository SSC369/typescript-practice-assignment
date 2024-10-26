interface MediaMetadataDimensionsType {
  width: number;
  height: number;
}

interface MediaMetadataType {
  size: string;
  dimensions: MediaMetadataDimensionsType;
}

class PostMediaModel {
  type: string;
  url: string;
  metadata: MediaMetadataType;

  constructor(type: string, url: string, metadata: MediaMetadataType) {
    this.type = type;
    this.url = url;
    this.metadata = metadata;
  }
}

export default PostMediaModel;
