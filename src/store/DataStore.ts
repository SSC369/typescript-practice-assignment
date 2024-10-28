import { makeAutoObservable } from "mobx";

import LeadDataModel from "../models/LeadDataModel";
import data from "../userData";
import AssigneeModel from "../models/AssigneeModel";
import OverviewModel from "../models/OverviewModel";
import FieldModel from "../models/FieldModel";
import GofModel from "../models/GofModel";
import { UserType } from "../types";

class DataStore {
  leadDataStore: Map<string, LeadDataModel> = new Map();
  users: Map<string, UserType> = new Map();
  isDataLoaded: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDataLoading(value: boolean) {
    this.isDataLoaded = value;
  }

  get getUsersData() {
    return this.users;
  }

  get dataLoading(): boolean {
    return this.isDataLoaded;
  }

  setLeadDataStore() {
    this.isDataLoaded = false;

    data.forEach((userData) => {
      const { assignees, overviewFields, gofs, leadId, name, stage } = userData;
      this.users.set(leadId, {
        leadId,
        name,
        stage,
      });

      // get instances of assignees
      const assigneesInstancesMap = new Map();
      assignees.forEach((assignee) => {
        const { id, name, profilePic, lastUpdated } = assignee;
        assigneesInstancesMap.set(
          id,
          new AssigneeModel(id, name, profilePic, lastUpdated)
        );
      });

      // get instances of overviews
      const overviewFieldsInstancesMap = new Map();
      overviewFields.forEach((field) => {
        const { fieldId, name, value, fieldType } = field;
        overviewFieldsInstancesMap.set(
          fieldId,
          new OverviewModel(fieldId, name, value, fieldType)
        );
      });

      // get instances of gofs
      const gofsInstancesMap = new Map();
      gofs.forEach((gof) => {
        const { id, name, fields } = gof;
        // create a map of instances for field
        const fieldInstancesMap = new Map();
        fields.forEach((field) => {
          const { fieldId, name, value, fieldType } = field;
          fieldInstancesMap.set(
            fieldId,
            new FieldModel(fieldId, name, value, fieldType)
          );
        });
        gofsInstancesMap.set(id, new GofModel(id, name, fieldInstancesMap));
      });

      this.leadDataStore.set(
        leadId,
        new LeadDataModel(
          leadId,
          name,
          stage,
          assigneesInstancesMap,
          overviewFieldsInstancesMap,
          gofsInstancesMap
        )
      );
    });
    this.isDataLoaded = true;
  }

  getLeadData() {
    return this.leadDataStore;
  }
}

export default new DataStore();
