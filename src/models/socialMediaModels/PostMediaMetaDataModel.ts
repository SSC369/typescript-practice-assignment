interface MediaMetadataDimensionsType {
  width: number;
  height: number;
}

class PostMediaMetaDataModel {
  size: string;
  dimensions: MediaMetadataDimensionsType;

  constructor(size: string, dimensions: MediaMetadataDimensionsType) {
    this.size = size;
    this.dimensions = dimensions;
  }
}

export default PostMediaMetaDataModel;
