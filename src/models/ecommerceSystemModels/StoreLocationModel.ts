import StoreAddressModel from "./StoreAddressModel";
import StoreInventoryModel from "./StoreInventoryModel";

class StoreLocationModel {
  id: string;
  address: StoreAddressModel;
  inventory: StoreInventoryModel;

  constructor(
    id: string,
    address: StoreAddressModel,
    inventory: StoreInventoryModel
  ) {
    this.id = id;
    this.address = address;
    this.inventory = inventory;
  }
}

export default StoreLocationModel;
