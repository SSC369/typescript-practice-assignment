class AssigneeModel {
  id: string;
  name: string;
  profilePic: string;
  lastUpdated: string;

  constructor(
    id: string,
    name: string,
    profilePic: string,
    lastUpdated: string
  ) {
    this.id = id;
    this.name = name;
    this.profilePic = profilePic;
    this.lastUpdated = lastUpdated;
  }
}

export default AssigneeModel;
