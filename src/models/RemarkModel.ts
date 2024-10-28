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
    this.remarkId = remarkId;
    this.content = content;
    this.addedBy = addedBy;
    this.createdAt = createdAt;
  }

  get remarkContent() {
    return this.content;
  }

  updateRemark(content: RemarkContentType, createdAt: Date) {
    try {
      this.content = content;
      this.createdAt = createdAt;
      return { status: true, message: "Remark Updated" };
    } catch (error) {
      if (error instanceof Error) {
        return { status: false, message: error.message };
      }
    }
  }
}

export default RemarkModel;
