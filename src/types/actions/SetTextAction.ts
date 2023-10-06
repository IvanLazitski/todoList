import { BaseAction } from "./BaseAction.ts";

export interface SetTextAction extends BaseAction {
    text: string
}