interface AddressCoordinates {
  lat: number;
  lng: number;
}

interface AddressType {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates: AddressCoordinates;
}

interface InventoryCategoriesType {
  electronics: number;
  accessories: number;
  software: number;
}

interface InventoryType {
  total: number;
  categories: InventoryCategoriesType;
}

class StoreLocationModel {
  id: string;
  address: AddressType;
  inventory: InventoryType;

  constructor(id: string, address: AddressType, inventory: InventoryType) {
    this.id = id;
    this.address = address;
    this.inventory = inventory;
  }
}

export default StoreLocationModel;
