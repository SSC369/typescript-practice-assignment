import StoreAddressModel from "./StoreAddressModel";
import StoreInventoryModel from "./StoreInventoryModel";
import StoreLocationModel from "./StoreLocationModel";

class StoreModel {
  name: string;
  locations: StoreLocationModel[];

  constructor(name: string, locations: StoreLocationModel[]) {
    this.name = name;
    this.locations = locations;
  }

  addStoreLocation(
    id: string,
    address: StoreAddressModel,
    inventory: StoreInventoryModel
  ) {
    // const { street, city, state, zipCode, coordinates } = address;
    // const addressInstance = new StoreAddressModel(
    //   street,
    //   city,
    //   state,
    //   zipCode,
    //   coordinates
    // );
    // const { total, categories } = inventory;
    // const inventoryInstance = new StoreInventoryModel(total, categories);
    const locationInstance = new StoreLocationModel(id, address, inventory);
    this.locations.push(locationInstance);
  }
  removeStoreLocation(id: string) {
    this.locations = this.locations.filter((location) => location.id !== id);
  }

  updateStore(name: string, locations: StoreLocationModel[]) {
    this.name = name;
    this.locations = locations;
  }
}

export default StoreModel;
