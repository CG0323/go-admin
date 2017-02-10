import { Observable } from 'rxjs/Observable';
import { LoginStatus, Account} from '../models/index';

export interface IUserState {
  loginStatus: LoginStatus;
  currentAccount: Account;
}

export const initialUserState: IUserState = {
  loginStatus: LoginStatus.LoggedOut,
  currentAccount: null
};

export function getStatus(state$: Observable<IUserState>) {
  return state$.select(state => state.loginStatus);
} 

export function getAccount(state$: Observable<IUserState>) {
  return state$.select(state => state.currentAccount);
} 





