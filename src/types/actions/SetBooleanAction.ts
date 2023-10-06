import { BaseAction } from "./BaseAction.ts";

export interface SetBooleanAction extends BaseAction {
    value: boolean
}