interface ProductSpecificationsDimensionsType {
  width: number;
  height: number;
  depth: number;
}

class ProductSpecificationModel {
  display: string;
  battery: string;
  features: string[];
  dimensions: ProductSpecificationsDimensionsType;

  constructor(
    display: string,
    battery: string,
    features: string[],
    dimensions: ProductSpecificationsDimensionsType
  ) {
    this.display = display;
    this.battery = battery;
    this.features = features;
    this.dimensions = dimensions;
  }
}

export default ProductSpecificationModel;
