import { Action } from '@ngrx/store';
import { type } from '../helpers/type.helper';
import { USER } from '../common/category.common';
import { LoginStatus,Account} from '../models/index';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IUserActions {
  INIT: string,
  INITIALIZED: string,
  LOGIN: string;
  LOGIN_RESULT: string;
  IDLE: string;
}

export const ActionTypes: IUserActions = {
  INIT: type(`${USER} Init`),
  INITIALIZED: type(`${USER} Initialized`),
  LOGIN: type(`${USER} Login`),
  LOGIN_RESULT: type(`${USER} Login Result`),
  IDLE: type(`${USER} Idle`),
};

export class InitAction implements Action {
  type = ActionTypes.INIT;
  payload:string = null;
}

export class InitilizedAction implements Action {
  type = ActionTypes.INITIALIZED;
  constructor(public payload: {loginStatus:LoginStatus, currentAccount:Account}) { }
}

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;
  constructor(public payload: {username:string, password:string}) { }
}

export class LoginResultAction implements Action {
  type = ActionTypes.LOGIN_RESULT;
  constructor(public payload: {loginStatus:LoginStatus, currentAccount:Account}) { }
}

export class LoginIdleAction implements Action {
  type = ActionTypes.IDLE;
  payload:string = null;
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = InitAction
  |InitilizedAction
  |LoginAction
  |LoginResultAction
  |LoginIdleAction
