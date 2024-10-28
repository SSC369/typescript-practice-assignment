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

  updateStoreLocation(
    addressObject: StoreAddressModel,
    inventoryObject: StoreInventoryModel
  ) {
    const { street, city, state, zipCode, coordinates } = addressObject;
    addressObject.updateStoreAddress(street, city, state, zipCode, coordinates);

    const { total, categories } = inventoryObject;
    inventoryObject.updateStoreInventory(total, categories);
  }
}

export default StoreLocationModel;
