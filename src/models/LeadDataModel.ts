import { makeAutoObservable } from "mobx";

import AssigneeModel from "./AssigneeModel";
import OverviewModel from "./OverviewModel";
import GofModel from "./GofModel";
import { StageType } from "../types";

class LeadDataModel {
  leadId: string;
  name: string;
  stage: StageType;
  assignees: AssigneeModel[];
  overviewFields: OverviewModel[];
  gofs: GofModel[];

  constructor(
    leadId: string,
    name: string,
    stage: StageType,
    assignees: AssigneeModel[],
    overviewFields: OverviewModel[],
    gofs: GofModel[]
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.leadId = leadId;
    this.name = name;
    this.stage = stage;
    this.assignees = assignees;
    this.overviewFields = overviewFields;
    this.gofs = gofs;
  }
}

export default LeadDataModel;