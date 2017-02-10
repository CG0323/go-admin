import { Injector, Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, getLoginStatus} from '../../app.states';
import { Observable } from 'rxjs/Observable';
import * as user from '../../actions/user.action';
import { LoginStatus} from '../../models/index'

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [
    'login.component.css',
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  private username;
  private password;
  private subscription;
  private status: LoginStatus;
  constructor(private store:Store<IAppState>) {
    this.subscription = store.let(getLoginStatus).subscribe(status=>{
      this.status = <LoginStatus>status;
    })
  }

  ngOnInit(){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  login(){
    this.store.dispatch(new user.LoginAction({username:this.username,password:this.password}));
  }

  isLoginFailed(){
    return this.status == LoginStatus.LoggingFailed;
  }
}
