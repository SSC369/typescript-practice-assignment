import { makeAutoObservable } from "mobx";
import RemarkModel, { RemarkContentType } from "../models/RemarkModel";

class RemarkStore {
  remarks: RemarkModel[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addRemark(
    remarkId: string,
    content: RemarkContentType,
    addedBy: string,
    createdAt: Date
  ) {
    try {
      const newRemark = new RemarkModel(remarkId, content, addedBy, createdAt);
      this.remarks.push(newRemark);
      return { status: true, message: "Remark is added" };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { status: false, message: error.message };
      }
    }
  }

  removeRemark(id: string) {
    this.remarks = this.remarks.filter((remark) => remark.remarkId !== id);
  }

  getRemarks() {
    return this.remarks;
  }
}

const remarkStoreObject = new RemarkStore();
export default remarkStoreObject;
