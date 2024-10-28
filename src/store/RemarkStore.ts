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
  ): void {
    const newRemark = new RemarkModel(remarkId, content, addedBy, createdAt);
    this.remarks.push(newRemark);
  }

  removeRemark(id: string): void {
    this.remarks = this.remarks.filter((remark) => remark.remarkId !== id);
  }

  getRemarks(): RemarkModel[] {
    return this.remarks;
  }
}

const remarkStoreObject = new RemarkStore();
export default remarkStoreObject;
