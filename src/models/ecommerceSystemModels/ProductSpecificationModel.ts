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

  updateProductSpecifications(
    display: string,
    battery: string,
    features: string[],
    dimensions: ProductSpecificationsDimensionsType
  ) {
    this.display = display;
    this.battery = battery;
    this.dimensions = dimensions;
    this.features = features;
  }

  addFeatures(features: string[]) {
    features.forEach((feature) => {
      this.features.push(feature);
    });
  }

  deleteFeature(feature: string) {
    if (this.features.includes(feature)) {
      this.features.filter((eachFeature) => eachFeature !== feature);
    }
  }
}

export default ProductSpecificationModel;
