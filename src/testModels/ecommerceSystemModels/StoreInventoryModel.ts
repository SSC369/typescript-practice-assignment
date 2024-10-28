export interface InventoryCategoriesType {
  electronics: number;
  accessories: number;
  software: number;
}

class StoreInventoryModel {
  total: number;
  categories: InventoryCategoriesType;

  constructor(total: number, categories: InventoryCategoriesType) {
    this.total = total;
    this.categories = categories;
  }

  updateStoreInventory(total: number, categories: InventoryCategoriesType) {
    this.total = total;
    this.categories = categories;
  }
}

export default StoreInventoryModel;
