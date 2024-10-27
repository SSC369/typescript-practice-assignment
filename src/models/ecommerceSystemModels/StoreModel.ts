import StoreLocationModel from "./StoreLocationModel";

class StoreModel {
  name: string;
  locations: StoreLocationModel[];

  constructor(name: string, locations: StoreLocationModel[]) {
    this.name = name;
    this.locations = locations;
  }
}

export default StoreModel;
