interface ContactType {
  email: string;
  phone: string;
}

class UserPersonalInfoModel {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  contact: ContactType;

  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    contact: ContactType
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.contact = contact;
  }

  get personalInfo() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      contact: this.contact,
    };
  }

  updatePersonalInfo(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    contact: ContactType
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.contact = contact;
  }
}

export default UserPersonalInfoModel;
