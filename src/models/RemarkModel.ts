import { makeAutoObservable } from "mobx";

export interface RemarkContentType {
  title: string;
  description: string;
}

class RemarkModel {
  remarkId: string;
  content: RemarkContentType;
  addedBy: string;
  createdAt: Date;

  constructor(
    remarkId: string,
    content: RemarkContentType,
    addedBy: string,
    createdAt: Date
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.remarkId = remarkId;
    this.content = content;
    this.addedBy = addedBy;
    this.createdAt = createdAt;
  }

  get remarkContent() {
    return this.content;
  }

  updateRemark(content: RemarkContentType, createdAt: Date): void {
    this.content = content;
    this.createdAt = createdAt;
  }
}

export default RemarkModel;
