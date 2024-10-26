import { makeAutoObservable } from "mobx";

import LeadDataModel from "../models/LeadDataModel";
import data from "../userData";
import AssigneeModel from "../models/AssigneeModel";
import OverviewModel from "../models/OverviewModel";
import FieldModel from "../models/FieldModel";
import GofModel from "../models/GofModel";
import { UserType } from "../types";

class DataStore {
  leadDataStore: LeadDataModel[] = [];
  users: UserType[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get getUsersData() {
    return this.users;
  }

  setUsersData() {
    data.forEach((user) => {
      const { leadId, name, stage } = user;
      this.users.push({
        leadId,
        name,
        stage,
      });
    });
  }

  setLeadDataStore() {
    data.forEach((userData) => {
      const { assignees, overviewFields, gofs, leadId, name, stage } = userData;

      // get instances of assignees
      const assigneesInstances = assignees.map((assignee) => {
        const { id, name, profilePic, lastUpdated } = assignee;
        return new AssigneeModel(id, name, profilePic, lastUpdated);
      });

      // get instances of overviews
      const overviewFieldsInstances = overviewFields.map((field) => {
        const { fieldId, name, value, fieldType } = field;
        return new OverviewModel(fieldId, name, value, fieldType);
      });

      // get instances of gofs
      const gofsInstances = gofs.map((gof) => {
        const { id, name, fields } = gof;
        // create an array of instances for field
        const fieldInstances = fields.map((field) => {
          const { fieldId, name, value, fieldType } = field;
          return new FieldModel(fieldId, name, value, fieldType);
        });
        return new GofModel(id, name, fieldInstances);
      });

      this.leadDataStore.push(
        new LeadDataModel(
          leadId,
          name,
          stage,
          assigneesInstances,
          overviewFieldsInstances,
          gofsInstances
        )
      );
    });
  }

  getLeadData() {
    return this.leadDataStore;
  }
}

export default new DataStore();
